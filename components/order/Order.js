import OrderItem from "./OrderItem";

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <h2>Your order:</h2>
        {Object.keys(this.props.order).map((product, i) => {
          //Check if there is already one of this product in the order.
          let thisProduct = this.props.products.find(thisProduct => {
            return thisProduct.id == this.props.order[product].product;
          });

          return (
            <OrderItem
              key={thisProduct.id}
              id={thisProduct.id}
              name={thisProduct.name}
              quantity={this.props.order[product].quantity}
              orderFunctions={this.props.orderFunctions}
            />
          );
        })}

        {this.props.order.length > 0 ? (
          <button
            className="btn btn-success btn-block"
            onClick={e => {
              this.props.orderFunctions.placeOrder();
            }}
          >
            🚗 Place your order
          </button>
        ) : (
          <p>Add an item to your cart to get started</p>
        )}
      </div>
    );
  }
}

export default Order;
