import DonutApp from "../components/DonutApp";

import Menu from "../components/menu/Menu";
import Order from "../components/order/Order";
import AuthInfo from "../components/user/AuthInfo";
import ZIPInfo from "../components/user/ZIPInfo";

import Link from "next/link";

class Order_Page extends React.Component {
  render() {
    return (
      <DonutApp>
        <div className="orderScreen">
          <h1 className="text-center">
            🍩🍩🍩 Donuts Straight to Your Home! 🍩🍩🍩
          </h1>
          <hr />
          <ZIPInfo
            zipCode={this.props.zipCode}
            setZIPCode={this.props.setZIPCode}
          />
          <br />
          <div className="row">
            <div className="col-6">
              <Menu
                products={this.props.products}
                order={this.props.order}
                orderFunctions={this.props.orderFunctions}
              />
            </div>

            <div className="col-6">
              <Order
                products={this.props.products}
                order={this.props.order}
                orderFunctions={this.props.orderFunctions}
              />
              <AuthInfo
                user={this.props.user}
                accountFunctions={this.props.accountFunctions}
              />
            </div>
          </div>
          <Link href="about">
            <a title="About">About us link</a>
          </Link>
        </div>
      </DonutApp>
    );
  }
}

export default Order_Page;
