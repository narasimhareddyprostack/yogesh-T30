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
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <EventEx />
      </React.Fragment>
    );
  }
}
export default App;
