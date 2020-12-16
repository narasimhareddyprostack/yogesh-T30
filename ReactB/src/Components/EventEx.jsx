import React, { Component } from "react";

class EventEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
  }
  clickHandler = () => {
    console.log("Inside click");
    this.setState({
      message: "Good Morning",
    });
  };
  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h5> Message : {this.state.message} </h5>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={this.clickHandler}
                  >
                    Change Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default EventEx;
