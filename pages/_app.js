import Link from "next/link";
import App from "next/app";
import Router from "next/router";

import Menu from "../components/menu/Menu";
import Order from "../components/order/Order";
import AuthInfo from "../components/user/AuthInfo";
import OrderSummary from "../components/order/OrderSummary";
import ZIPInfo from "../components/user/ZIPInfo";

// local storage so that we can store the user's cart
import ls from "local-storage";

import Builton from "@builton/core-sdk";

let builton, builton_auth;

import firebase from "firebase/app";
import "firebase/auth";
import base, { firebaseApp } from "../components/Base";

class MyApp extends App {
  state = {
    step: "order",
    zipCode: "",
    pastOrders: [],
    products: [],
    order: [],
    user: {}
  };

  async componentDidMount() {
    let storedOrder = [];
    let pastOrders = [];
    let currentStep = "order";
    let zipCode = "";

    // check if any data is already set in local storage
    if (ls.get("cart") || ls.get("currentStep")) {
      storedOrder = JSON.parse(ls.get("cart"));
      currentStep = JSON.parse(ls.get("currentStep"));
    }
    if (ls.get("zipCode")) {
      zipCode = JSON.parse(ls.get("zipCode"));
    }
    if (ls.get("pastOrders")) {
      pastOrders = JSON.parse(ls.get("pastOrders"));
    }

    //Check if a user is logged in and call authHandler to update state
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //Handle the existing auth
        this.authHandler({ user });
      } else {
        //Authenticate as a guest
        firebase
          .auth()
          .signInAnonymously()
          .catch(function(error) {
            // Handle Errors here.
            console.log(error);
          });
      }
    });

    // Set up BuiltOn without any user data yet...
    builton = await new Builton({
      apiKey: process.env.BUILTON_APIKEY
    });

    const products = await builton.products.get({
      size: 10,
      page: 0,
      urlParams: { expand: "image" }
    });

    this.setState({
      products: products.current,
      order: storedOrder,
      step: currentStep,
      pastOrders,
      zipCode
    });
  }

  componentDidUpdate() {
    ls.set("cart", JSON.stringify(this.state.order));
    ls.set("currentStep", JSON.stringify(this.state.step));
    ls.set("pastOrders", JSON.stringify(this.state.pastOrders));
    ls.set("zipCode", JSON.stringify(this.state.zipCode));
  }

  orderFunctions = {
    addToOrder: productID => {
      let order = this.state.order;

      //Check if there is already one of this product in the order.
      let existingOrderIndex = order.findIndex(orderItem => {
        return orderItem.product == productID;
      });

      //If there is an index with this order
      if (existingOrderIndex !== -1) {
        order[existingOrderIndex].quantity++;
      } else {
        order.push({
          product: productID,
          quantity: 1
        });
      }

      this.setState({ order });
    },
    removeFromOrder: productID => {
      let order = this.state.order;

      //Check if there is already one of this product in the order.
      let existingOrderIndex = order.findIndex(orderItem => {
        return orderItem.product == productID;
      });

      //If there is an index with this order
      if (order[existingOrderIndex].quantity > 1) {
        order[existingOrderIndex].quantity--;
      } else {
        order.splice(existingOrderIndex, 1);
      }

      //Update the state object
      this.setState({ order });
    },
    placeOrder: () => {
      this.setState({ step: "checkout" });
      this.navigate("/checkout");
    }
  };

  navigate = page => {
    const { pathname } = Router;
    // if (pathname == "/") {
    Router.push(page);
    // }
  };

  //This runs when a user logs in
  authHandler = async authData => {
    //This is Wes Bos' code from his course....
    // //1. look up the current store in the firebase db
    // const store = await base.fetch(this.props.storeId, { conext: this });
    // //2. claim if if there is no owner
    // if (!store.owner) {
    //   //save it as our own
    //   await base.post(`${this.props.storeId}/owner`, {
    //     data: authData.user.uidorderFinished
    //   });
    // }
    // //3. set the state of the inventory component to reflect the current user
    // this.setState({
    //   uid: authData.user.uid,
    //   owner: store.owner || authData.user.uid
    // });

    let firstName = "",
      lastName = "";

    //Check if the user has a displayName
    if (authData.user.displayName) {
      //Split the displayName into a first and last name, if possible
      let displayName = authData.user.displayName.split(" ");
      if (displayName.length == 2) {
        firstName = displayName[0];
        lastName = displayName[1];
      } else if (displayName.length == 3) {
        //Add middle name to first name
        firstName = displayName[0] + " " + displayName[1];
        lastName = displayName[2];
      } else {
        //Any shorter or longer names will just have no last name and everything in the first name
        firstName = displayName;
      }
    }

    authData.user.getIdToken().then(async idToken => {
      //Re-initialize BuiltOn with the user data
      builton = await new Builton({
        apiKey: process.env.BUILTON_APIKEY,
        bearerToken: idToken
      });
      const body = {
        first_name: firstName,
        last_name: lastName,
        email: authData.user.email
      };
      builton.users
        .authenticate(body)
        .then(user => {
          // Check if any user details have changed & update if necessary
          if (
            body.first_name != user.first_name ||
            body.last_name != user.last_name ||
            body.email != user.email
          ) {
            builton.users
              .setMe()
              .update({
                first_name: body.first_name,
                last_name: body.last_name,
                email: body.email
              })
              .then(user => {
                //Sloppy code, but this ensures the latest version of the user is in state...
                this.setState({ user });
              });
          }

          // Add the user to our state
          this.setState({ user });
        })
        .catch(err => {
          console.error(err.response.body);
        });
    });
  };

  setZIPCode = zipCode => {
    this.setState({ zipCode });
  };
  resetZIPCode = () => {
    this.setState({ zipCode: null });
  };

  orderFinished = order => {
    // add the order to state & changes the screen

    let pastOrders = this.state.pastOrders;

    pastOrders.push(order);
    this.setState({ step: "confirmation", pastOrders });
    this.navigate("/confirmation");
  };

  accountFunctions = {
    authenticate: provider => {
      const authProvider = new firebase.auth[`${provider}AuthProvider`]();

      //Ensure that we ask for a specific account every time
      authProvider.setCustomParameters({
        prompt: "select_account"
      });
      firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.authHandler);
    },
    logOut: () => {
      firebaseApp
        .auth()
        .signOut()
        .then(
          function() {
            // Sign-out successful.
          },
          function(error) {
            // An error happened.
            console.log(error);
          }
        );
    }
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Component
        {...pageProps}
        user={this.state.user}
        zipCode={this.state.zipCode}
        setZIPCode={this.setZIPCode}
        resetZIPCode={this.resetZIPCode}
        products={this.state.products}
        order={this.state.order}
        orderFunctions={this.orderFunctions}
        products={this.state.products}
        order={this.state.order}
        orderFinished={this.orderFinished}
        builton={builton}
        navigate={this.navigate}
        accountFunctions={this.accountFunctions}
      />
    );
  }
}

export default MyApp;
