import React, { Component } from 'react';
import CocktailsContainer from './container/CocktailsContainer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CocktailsContainer />
      </div>
    );
  }
}

export default App;
