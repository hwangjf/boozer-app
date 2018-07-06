import React from 'react';

export default class CocktailList extends React.Component {
  render() {
    return (
      <li id={this.props.cocktail.id} onClick={this.props.handleClick} >
        {this.props.cocktail.name}
      </li>
    )
  }
}