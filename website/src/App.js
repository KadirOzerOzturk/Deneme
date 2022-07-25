import React, { Component } from "react";
import Navi from "./components/Navi";
import Cards from "./components/Cards"

import  './deneme.css';

class App extends Component {
  render() {
    return (
      <div >
        <Navi title ="UniForum"/>
        <hr/>
        <br/>
        <Cards/>
      </div>
    );
  }
}

export default App;
