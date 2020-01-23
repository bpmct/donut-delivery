class MenuItem extends React.Component {
  render() {
    console.log(this.props.product);
    const product = this.props.product;

    return (
      <div className="col-4 menu-item">
        <div className="card">
          <img src={product.image.public_url} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p>
              <strong>Price: </strong> ${product.price}
            </p>
            {/* <p>{product.description}</p> */}
            <button className="btn btn-success btn-sm">🛒 Add to order</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
