import React, { Component } from "react";

class EventEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    this.clickHandler2 = this.clickHandler2.bind(this);
  }
  clickHandler = () => {
    console.log("Inside click");
    this.setState({
      message: "Good Morning",
    });
  };
  clickHandler2() {
    this.setState({
      message: "Good Evening",
    });
  }
  clickHandler3() {
    this.setState({
      message: "Good Night",
    });
  }
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
                    className="btn btn-warning btn-sm"
                    onClick={this.clickHandler}
                  >
                    Change Message
                  </button>
                  <p>
                    Event Handling:1 Using FatArrow Function. Event Handler as
                    arrow funciton.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h5> Message : {this.state.message} </h5>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={this.clickHandler2}
                  >
                    Change Message
                  </button>
                  <p>
                    Event Handling:2 this.clickHandler2 =
                    this.clickHandler2.bind(this);
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">
                  <h5> Message : {this.state.message} </h5>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => {
                      this.clickHandler3();
                    }}
                  >
                    Change Message
                  </button>
                  <p>Event Handling:3</p>
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
