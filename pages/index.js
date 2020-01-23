import builton from "../components/BuiltOn";

import DonutApp from "../components/DonutApp";
import Link from "next/link";
import Menu from "../components/menu/Menu";
import Order from "../components/Order";

class Index extends React.Component {
  state = {
    products: [],
    order: {
      pizza: 12
    }
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
      alert("Adding " + productID + " to order");
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
