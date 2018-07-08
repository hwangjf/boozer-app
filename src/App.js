import React, { Component } from 'react';
import CocktailsContainer from './container/CocktailsContainer'
import {Button} from 'react-bootstrap'
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
