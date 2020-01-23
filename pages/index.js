import DonutApp from "../components/DonutApp";
import Link from "next/link";
import Menu from "../components/menu/Menu";

export default function Index() {
  return (
    <DonutApp>
      <Menu />
      <div className="row">
        <div className="col-6"></div>

        <div className="col-6"></div>
      </div>
      <br />
      <p>👤 You are not logged in...</p>
      <Link href="about">
        <a title="About">About us link</a>
      </Link>
    </DonutApp>
  );
}
