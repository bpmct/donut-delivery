import DonutApp from "../components/DonutApp";

import Menu from "../components/menu/Menu";
import Order from "../components/order/Order";
import AuthInfo from "../components/user/AuthInfo";
import OrderSummary from "../components/order/OrderSummary";
import ZIPInfo from "../components/user/ZIPInfo";

import Link from "next/link";

export default function Order_Page(props) {
  return (
    <DonutApp>
      <div className="orderScreen">
        <h1 className="text-center">
          🍩🍩🍩 Donuts Straight to Your Home! 🍩🍩🍩
        </h1>
        <hr />
        <ZIPInfo
          zipCode={props.zipCode}
          setZIPCode={props.setZIPCode}
          resetZIPCode={props.resetZIPCode}
        />
        <br />
        <div className="row">
          <div className="col-6">
            <Menu
              products={props.products}
              order={props.order}
              orderFunctions={props.orderFunctions}
            />
          </div>

          <div className="col-6">
            <Order
              products={props.products}
              order={props.order}
              orderFunctions={props.orderFunctions}
            />
            <AuthInfo
              user={props.user}
              accountFunctions={props.accountFunctions}
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
