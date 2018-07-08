import React, {Component} from 'react'

export default class SearchCocktails extends Component {
  render() {
    return (
      <div>
        <label>Cocktail search: </label>
        <input type="text" value={this.props.term} onChange={this.props.handleSearch} />
        <label>Sort by: </label> 
        <select>
          <option>Options</option>
        </select>
      </div>
    )
  }
}