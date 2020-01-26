import builton from "../components/BuiltOn";

import DonutApp from "../components/DonutApp";
import Link from "next/link";
import Menu from "../components/menu/Menu";
import Order from "../components/order/Order";

import base from "../components/Base";

class Index extends React.Component {
  state = {
    products: [],
    order: []
  };

  async componentDidMount() {
    const products = await builton.products.get({
      size: 10,
      page: 0,
      urlParams: { expand: "image" }
    });

    this.setState({
      products: products.current
    });
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
      console.log("Placing an order...");
    }
  };

  render() {
    return (
      <DonutApp>
        <h1 className="text-center">
          🍩🍩🍩 Donuts Straight to Your Home! 🍩🍩🍩
        </h1>
        <hr />
        <p>If you have any questions, please lorem ipsum dolar set imet.</p>
        <br />
        <br />
        <div className="row">
          <div className="col-6">
            <Menu
              products={this.state.products}
              order={this.state.order}
              orderFunctions={this.orderFunctions}
            />
          </div>

          <div className="col-6">
            <Order
              products={this.state.products}
              order={this.state.order}
              orderFunctions={this.orderFunctions}
            />
          </div>
        </div>
        <hr />
        <p>👤 You are not logged in...</p>
        <Link href="about">
          <a title="About">About us link</a>
        </Link>
      </DonutApp>
    );
  }
}

export default Index;
