import DonutApp from "../components/DonutApp";

import Menu from "../components/menu/Menu";
import Order from "../components/order/Order";
import AuthInfo from "../components/user/AuthInfo";
import ZIPInfo from "../components/user/ZIPInfo";

class Order_Page extends React.Component {
  orderFunctions = {
    addToOrder: (productID) => {
      let order = this.props.order;

      //Check if there is already one of this product in the order.
      let existingOrderIndex = order.findIndex((orderItem) => {
        return orderItem.product == productID;
      });

      //If there is an index with this order
      if (existingOrderIndex !== -1) {
        order[existingOrderIndex].quantity++;
      } else {
        order.push({
          product: productID,
          quantity: 1,
        });
      }

      //Update the order with the new object
      this.props.updateOrder(order);
    },
    removeFromOrder: (productID) => {
      let order = this.props.order;

      //Check if there is already one of this product in the order.
      let existingOrderIndex = order.findIndex((orderItem) => {
        return orderItem.product == productID;
      });

      //If there is an index with this order
      if (order[existingOrderIndex].quantity > 1) {
        order[existingOrderIndex].quantity--;
      } else {
        order.splice(existingOrderIndex, 1);
      }

      //Update the order with the new object
      this.props.updateOrder(order);
    },
    placeOrder: () => {
      this.props.navigate("checkout");
    },
  };

  render() {
    return (
      <DonutApp>
        <div className="orderScreen">
          <h1 className="text-center">
            {process.env.SHOP_NAME}: Order for delivery
          </h1>
          <hr />
          <ZIPInfo
            zipCode={this.props.zipCode}
            setZIPCode={this.props.setZIPCode}
            clearZIPCode={this.props.clearZIPCode}
          />
          <br />
          <div className="row">
            <div className="col-6">
              <Menu
                products={this.props.products}
                order={this.props.order}
                orderFunctions={this.orderFunctions}
              />
            </div>

            <div className="col-6">
              <Order
                products={this.props.products}
                order={this.props.order}
                orderFunctions={this.orderFunctions}
              />
              <AuthInfo
                user={this.props.user}
                userFunctions={this.props.userFunctions}
              />
            </div>
          </div>
        </div>
      </DonutApp>
    );
  }
}

export default Order_Page;
