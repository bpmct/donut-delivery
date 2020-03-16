class OrderSummary extends React.Component {
  render() {
    let totalPrice = 0;
    let currency = "";
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.props.order).map((product, i) => {
            let thisProduct = this.props.products.find(thisProduct => {
              return thisProduct.id == this.props.order[product].product;
            });
            let thisQuantity = this.props.order[product].quantity;

            //Since BuiltOn only accepts one currency per account,
            //we will just have the last product in the order determine the currency for the total
            currency = thisProduct.currency;

            //Round to two decimal places
            let itemsPrice = +(thisProduct.price * thisQuantity).toFixed(2);

            //Add item to total price
            totalPrice += itemsPrice;
            return (
              <tr key={thisProduct.id}>
                <td>
                  <img
                    src={thisProduct.image.public_url}
                    width="150"
                    alt={thisProduct.name}
                  />
                </td>
                <td>{thisProduct.name}</td>
                <td>{thisProduct.price + " " + currency}</td>
                <td>{"x" + thisQuantity}</td>
                <td>{itemsPrice + " " + currency}</td>
              </tr>
            );
          })}
          <tr>
            <td className="text-right">
              <strong>Total:</strong>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>{totalPrice + " " + currency}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default OrderSummary;
