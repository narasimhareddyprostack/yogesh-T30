import React from "react";
import "./App.css";
//import ComponentA from "./components/props-drilling/ComponentA";
import CompA from "./ContextAPI/CompA";
import UserContext from "./ContextAPI/UserContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        author: "Narasima Reddy",
        Project: "PSA",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">
            React with Component Interaction
          </a>
        </nav>

        <React.Fragment>
          <div className="card m-4">
            <div className="card-body bg-success text-white">
              <p className="h5">App Component</p>
              <span>{JSON.stringify(this.state.userInfo)}</span>

              <UserContext.Provider value={this.state.userInfo}>
                <CompA />
              </UserContext.Provider>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
export default App;

// Style - 1
/*
let App = () => {
  return <h1>Hello, Good Evening</h1>;
};


//style 2:
function App() {
  return <h1>Hello, Good Evening</h1>;
}
*/
/*
import React from "react";

import Navbar from "./Components/Navbar";
import EventEx from "./Components/EventEx";
import Registration from "./Components/Registration";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <EventEx />
        <Registration />
      </React.Fragment>
    );
  }
}
export default App;
*/
