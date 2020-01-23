class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <h2>Your order:</h2>
        {Object.keys(this.props.order).map((product, i) => {
          return (
            <li key={product}>
              {product}: {this.props.order[product]}
            </li>
          );
        })}
      </div>
    );
  }
}

export default Order;
