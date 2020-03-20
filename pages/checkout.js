import DonutApp from "../components/DonutApp";

import Menu from "../components/menu/Menu";
import Order from "../components/order/Order";
import AuthInfo from "../components/user/AuthInfo";
import Checkout from "../components/order/Checkout";
import OrderSummary from "../components/order/OrderSummary";
import ZIPInfo from "../components/user/ZIPInfo";

import Link from "next/link";

export default function Checkout_Page(props) {
  return (
    <DonutApp>
      <Checkout
        order={props.order}
        products={props.products}
        editOrder={props.backToOrder}
        zipCode={props.zipCode}
        setZIPCode={props.setZIPCode}
        orderFinished={props.orderFinished}
        user={props.user}
        builton={props.builton}
        accountFunctions={props.accountFunctions}
      />
    </DonutApp>
  );
}
