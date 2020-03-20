import DonutApp from "../components/DonutApp";

import OrderSummary from "../components/order/OrderSummary";
import AuthInfo from "../components/user/AuthInfo";
import Link from "next/link";

class Checkout extends React.Component {
  state = {
    address1: "",
    address2: "",
    city: "",
    state: "",
    phone: ""
  };

  handleChange = e => {
    //very simple at this point, will require validation in the future
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onCheckout = e => {
    e.preventDefault();

    let builton = this.props.builton;

    let placeOrder = this.props.placeOrder;

    let orderBody = {
      items: this.props.order,
      currency: "USD",
      delivery_address: {
        //Allow Google's API to locate the exact address
        service: "google",
        street_name: this.state.address1,
        phone_number: this.state.phone,
        building: this.state.address2,
        zip_code: this.props.zipCode,
        city: this.state.city,
        // Append the state to country for US and other regions
        country: this.state.state + " United States"
      }
    };

    builton.orders.create(orderBody, {}, function(err, order) {
      if (err) {
        // Handle error
        return;
      }

      //order success
      placeOrder(order);
    });
  };

  render() {
    return (
      <DonutApp>
        <h1>💳 Checkout</h1>
        <div className="row">
          <div className="col-md-8">
            <OrderSummary
              products={this.props.products}
              order={this.props.order}
            />
          </div>
          <div className="col-md-4">
            <Link href="/">
              <a title="Back to order">⬅ Change your order</a>
            </Link>
            <hr />
            <form
              // workaround for LastPass chrome extension
              className="form-horizontal"
              name="checkoutForm"
              onSubmit={this.onCheckout}
            >
              <label>
                <strong>Your address: </strong>
              </label>
              <input
                type="text"
                className="form-control"
                name="address1"
                autoComplete="shipping street-address"
                value={this.state.address1}
                onChange={this.handleChange}
                placeholder="Address Line 1"
                required
              />
              <br />
              <input
                type="text"
                className="form-control"
                name="address2"
                autoComplete="shipping shipping address-level2"
                value={this.state.address2}
                onChange={this.handleChange}
                placeholder="Address Line 2 (Apt/Unit)"
              />
              <br />
              <div className="row">
                <div className="col pr-0">
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    autoComplete="shipping locality"
                    value={this.state.city}
                    onChange={this.handleChange}
                    placeholder="City"
                    required
                  />
                </div>
                <div className="col pr-0">
                  <select
                    name="state"
                    className="form-control"
                    required
                    autoComplete="shipping region"
                    value={this.state.state}
                    onChange={this.handleChange}
                  >
                    <option value="disabled selected value">State</option>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AR">AR</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DC">DC</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="IA">IA</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="MA">MA</option>
                    <option value="MD">MD</option>
                    <option value="ME">ME</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MO">MO</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="NC">NC</option>
                    <option value="NE">NE</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NV">NV</option>
                    <option value="NY">NY</option>
                    <option value="ND">ND</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WI">WI</option>
                    <option value="WV">WV</option>
                    <option value="WY">WY</option>
                  </select>
                </div>
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    value={this.props.zipCode}
                    autoComplete="shipping postal-code"
                    onChange={e => {
                      this.props.setZIPCode(e.target.value);
                    }}
                    name="city"
                    placeholder="ZIP"
                    required
                  />
                </div>
              </div>
              <br />
              <input
                type="tel"
                className="form-control"
                name="phone"
                autoComplete="shipping tel"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="Phone Number"
                required
              />{" "}
              <br />
              <button type="submit" className="btn btn-block btn-success">
                🛒 Complete Purchase
              </button>
              <AuthInfo
                user={this.props.user}
                userFunctions={this.props.userFunctions}
              />
            </form>
          </div>
        </div>
        <br />
      </DonutApp>
    );
  }
}
export default Checkout;
