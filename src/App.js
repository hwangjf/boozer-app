import React, { Component } from 'react';
import CocktailsContainer from './container/CocktailsContainer'
import {Button} from 'react-bootstrap'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button bsStyle="primary" >bootstrap</Button>
        <CocktailsContainer />
      </div>
    );
  }
}

export default App;
