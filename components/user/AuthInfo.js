class AuthInfo extends React.Component {
  render() {
    if (!this.props.user.first_name || this.props.user.first_name == "") {
      return (
        <div className="AuthInfo">
          <hr />
          <p className="text-center">👤 You are checking out as a guest.</p>
          <p className="text-center">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => this.props.accountFunctions.authenticate("Google")}
            >
              <i className="fa fa-google"></i> Log in with Google
            </button>
          </p>
        </div>
      );
    } else {
      return (
        <div className="AuthInfo">
          <hr />
          <p className="text-center">
            👤 Hello,{" "}
            {this.props.user.first_name + " " + this.props.user.last_name}!{" "}
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                this.props.accountFunctions.logOut();
              }}
            >
              Log out
            </a>
          </p>
        </div>
      );
    }
  }
}

export default AuthInfo;
