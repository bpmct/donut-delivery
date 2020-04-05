import Link from "next/link";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        className="navbar-brand"
        title={process.env.SHOP_NAME}
        href={process.env.SHOP_LANDING_PAGE}
        target="_blank"
      >
        {process.env.SHOP_NAME}
      </a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href={process.env.SHOP_LANDING_PAGE}>
            Home
          </a>
        </li>
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link" href="#">
              Deliveries <span className="sr-only">(current)</span>
            </a>
          </Link>
        </li>
        <li className="nav-item disabled">
          <Link href="/confirmation">
            <a className="nav-link" href="#">
              View order status <span className="sr-only">(current)</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
