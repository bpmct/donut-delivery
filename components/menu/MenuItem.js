class MenuItem extends React.Component {
  render() {
    const product = this.props.product;

    let image = "";

    //Use demo picture if there is no image URL
    if (!product.image) image = "/img/product_default.png";
    else image = product.image.public_url;

    return (
      <div className="col-6 menu-item">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p>
              <strong>Price: </strong> ${product.price}
            </p>
            {/* <p>{product.description}</p> */}
            <button
              className="btn btn-success btn-sm"
              onClick={(e) => {
                this.props.orderFunctions.addToOrder(product.id);
              }}
            >
              🛒 Add to order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
