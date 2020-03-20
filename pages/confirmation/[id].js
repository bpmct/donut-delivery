import DonutApp from "../../components/DonutApp";
import { useRouter } from "next/router";
import OrderSummary from "../../components/order/OrderSummary";
import Link from "next/link";

export default function Confirmation_Page(props) {
  const router = useRouter();
  if (props.pastOrders[router.query.id])
    return (
      <DonutApp>
        <div className="confirmationScreen">
          <h1 className="text-center">Your order has been processed!</h1>
          <hr />
          <br />
          <p className="text-center">
            <strong>Options: </strong>
            <button
              className="btn btn-success"
              onClick={() => alert("Coming soon")}
            >
              📲 Get text alerts
            </button>{" "}
            <button
              className="btn btn-danger"
              onClick={() => alert("Coming soon")}
            >
              ✖ Cancel order
            </button>
          </p>
          <p className="text-center">
            Order ID:{" "}
            <span className="badge badge-light">#{router.query.id}</span>{" "}
            Status:{" "}
            <span className="badge badge-info">
              {props.pastOrders[router.query.id].delivery_status}
            </span>
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
  else
    return (
      <DonutApp>
        <p>Order not found</p>
        <br />{" "}
        <Link href="/">
          <a title="Back home">⬅ Back home</a>
        </Link>
      </DonutApp>
    );
}
