import MenuItem from "./MenuItem";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <h2>Our menu:</h2>
        <div className="row">
          {this.props.products.map((product, index) => {
            return <MenuItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    );
  }
}

export default Menu;
