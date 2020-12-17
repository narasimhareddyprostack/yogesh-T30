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
