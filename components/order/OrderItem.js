class OrderItem extends React.Component {
  render() {
    return (
      <div className="card order-item">
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              {this.props.name}: {this.props.quantity}
            </div>
            <div className="col-6 text-right">
              <button
                onClick={(e) => {
                  this.props.orderFunctions.removeFromOrder(this.props.id);
                }}
              >
                ➖
              </button>{" "}
              <button
                onClick={(e) => {
                  this.props.orderFunctions.addToOrder(this.props.id);
                }}
              >
                ➕
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderItem;
