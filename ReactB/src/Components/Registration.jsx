import React from "react";

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      loc: "",
    };
  }
  inputHander = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  btnHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className="form-control"
                    placeholder="User Name"
                    onChange={this.inputHander}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    className="form-control"
                    placeholder="Email"
                    onChange={this.inputHander}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    className="form-control"
                    placeholder="Password"
                    onChange={this.inputHander}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="loc"
                    value={this.state.loc}
                    className="form-control"
                    placeholder="Location"
                    onChange={this.inputHander}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Signup"
                    onClick={this.btnHandler}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Registration;
