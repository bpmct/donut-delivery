import DonutApp from "../components/DonutApp";

import OrderSummary from "../components/order/OrderSummary";

import Link from "next/link";

export default function Confirmation_Page(props) {
  return (
    <DonutApp>
      <div className="confirmationScreen">
        <h1 className="text-center">Your order has been processed!</h1>
        <hr />
        <br />
        <p className="text-center">
          <strong>Options: </strong>
          <button className="btn btn-success">📲 Get text alerts</button>{" "}
          <button className="btn btn-danger">✖ Cancel order</button>
        </p>
        <p className="text-center">
          Order number: <span className="badge badge-light">#4BACD</span>
        </p>
        <br />
        <Link href="/">
          <a title="Back home">⬅ Back home</a>
        </Link>
        <br />
        <br />
        <OrderSummary order={props.order} products={props.products} />
      </div>
    </DonutApp>
  );
}
