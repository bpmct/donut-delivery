import DonutApp from "../components/DonutApp";
import OrderSummary from "../components/order/OrderSummary";
import Link from "next/link";
import axios from "axios";

class Delivery_Zones extends React.Component {
  constructor() {
    super();
    this.state = {
      deliveryLocations: [],
    };
  }

  componentDidMount() {
    axios.get(process.env.ZIP_CODES_JSON).then((result) => {
      this.setState({ deliveryLocations: result.data.zip_codes });
    });
  }

  render() {
    const deliveryLocations = [];

    for (const [index, location] of this.state.deliveryLocations.entries()) {
      deliveryLocations.push(
        <div className="col-md-6" key={index}>
          <div className="card my-1">
            <div className="card-body">
              {location.city}, {location.state} {location.zip_code}
            </div>
          </div>
        </div>
      );
    }

    return (
      <DonutApp>
        <h1 className="text-center">🚗 Delivery zones</h1>
        <hr />
        <Link href="/">
          <a title="Back">⬅ Go back</a>
        </Link>
        <div className="row mt-2">
          <div className="col-md-6">
            <div className="card my-1 border-primary">
              <div className="card-body">
                Your ZIP missing?{" "}
                <a href={process.env.SHOP_LANDING_PAGE} target="_blank">
                  Contact us
                </a>
              </div>
            </div>
          </div>
          {deliveryLocations}
        </div>
      </DonutApp>
    );
  }
}

export default Delivery_Zones;
