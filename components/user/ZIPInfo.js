class ZIPInfo extends React.Component {
  constructor() {
    super();
    this.zipInput = React.createRef();
  }

  resetZipCode = e => {
    e.preventDefault();
    console.log("EPIC THIGNS HAPPENED");
    this.props.resetZipCode();
  };

  setZipCode = e => {
    e.preventDefault();
    if (this.zipInput.current.value) {
      let zipCode = this.zipInput.current.value;
      this.props.setZipCode(zipCode);
    }
  };

  zipExists() {
    return (
      <span>
        Your ZIP Code is set to: <em>{this.props.zipCode}</em>.{" "}
        <a href="#" onClick={this.resetZipCode}>
          Change
        </a>
      </span>
    );
  }

  zipUnset() {
    return (
      <form className="form-inline" onSubmit={this.setZipCode}>
        Enter your ZIP code to get started:{"  "}
        <input
          style={{ marginLeft: 7 }}
          type="number"
          name="zip"
          ref={this.zipInput}
          className="form-control form-control-sm"
        ></input>
        <button
          style={{ marginLeft: 7 }}
          type="submit"
          className="btn btn-success btn-sm"
        >
          Go
        </button>
      </form>
    );
  }

  render() {
    return (
      <div className="alert alert-success" role="alert">
        {/* Call different functions depending on whether the ZIP code is set or not */}
        {this.props.zipCode ? this.zipExists() : this.zipUnset()}
      </div>
    );
  }
}

export default ZIPInfo;
