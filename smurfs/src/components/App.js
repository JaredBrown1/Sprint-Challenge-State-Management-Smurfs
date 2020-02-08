import React, { Component } from "react";
import "./App.css";
import SmurfForm from "./smurfForm";
import SmurfList from "./smurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
