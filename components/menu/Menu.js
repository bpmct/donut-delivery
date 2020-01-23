import MenuItem from "./MenuItem";
import builton from "../BuiltOn";

class Menu extends React.Component {
  state = {
    products: []
  };

  //Load the products from BuiltOn
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

  render() {
    return (
      <div className="menu">
        <h2>Our menu:</h2>
        <div className="row">
          {this.state.products.map((product, index) => {
            return <MenuItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
  }
}

export default Menu;
