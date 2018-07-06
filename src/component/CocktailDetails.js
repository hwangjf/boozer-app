import React, {Component} from 'react';
import Proportions from './Proportions'

export default class CocktailDetails extends Component {
  state = {
    cocktail: null,
    proportions: []
  }

  static getDerivedStateFromProps(prevProps,state) {
    return state = {cocktail: prevProps.selectedCocktail}
  }

  render() {
    return (
      <div>
        <ul>
          <h1>{this.state.cocktail.name}</h1>
          <li>{this.state.cocktail.description}</li>
          <li>{this.state.cocktail.instructions}</li>
          <li>{this.state.cocktail.source}</li>
          <li>Proportions: <Proportions proportions={this.props.proportions} /></li>
        </ul>
        <br />
      </div>
    )
  }
}