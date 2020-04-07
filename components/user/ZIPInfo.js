import Link from "next/link";

class ZIPInfo extends React.Component {
  constructor() {
    super();
    this.zipInput = React.createRef();

    this.state = { zipCodeError: false };
  }

  updateZIP = (e) => {
    e.preventDefault();

    this.props
      .setZIPCode(this.zipInput.current.value)
      .then((zipUpdateSuccess) => {
        if (!zipUpdateSuccess) {
          this.setState({ zipCodeError: true });
        }
      });
  };

  zipError() {
    return (
      <span className="text-danger" style={{ paddingLeft: "10px" }}>
        Sorry, we do not deliver to that ZIP Code.{" "}
        <Link href="/delivery_zones">
          <a title="Delivery locations">Delivery locations</a>
        </Link>
      </span>
    );
  }

  zipExists() {
    return (
      <span>
        Your ZIP Code is set to: <em>{this.props.zipCode}</em>.{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            this.props.clearZIPCode();
          }}
        >
          Change
        </a>
      </span>
    );
  }

  zipUnset() {
    return (
      <>
        <form
          className="form-inline justify-content-center"
          onSubmit={this.updateZIP}
        >
          Enter your ZIP code to get started:{"  "}
          <input
            style={{ marginLeft: 7, width: 100 }}
            type="number"
            name="zip"
            ref={this.zipInput}
            autoFocus
            className="form-control form-control-sm mt-2 mt-md-0"
          ></input>
          <button
            style={{ marginLeft: 7 }}
            type="submit"
            className="btn btn-success btn-sm mt-2 mt-md-0"
          >
            Go
          </button>
          {this.state.zipCodeError ? this.zipError() : null}
        </form>
      </>
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
