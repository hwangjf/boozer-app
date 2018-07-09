import React, {Component} from 'react';

export default class ProportionsForm extends Component {

  render() {
    return (
      <div>
        <label>Ingredient Name: </label>
        <input
          type="text"
          name="ingredientName"
          id={this.props.id + "-ingredientName"}
          onChange={this.props.handleProportions}
          value={this.props.ingredientName ? this.props.ingredientName : this.props.ingredient_name}
        />

        <label>Amount: </label>
        <input
          type="text"
          name="quantity"
          id={this.props.id + "-quantity"}
          onChange={this.props.handleProportions}
          value={this.props.quantity ? this.props.quantity :this.props.amount}
        />
        <button type="button" className="btn btn-success btn-sm" onClick={this.props.handleClick}>[+]</button>
        <button type="button" className="btn btn-danger btn-sm" id={this.props.id + "-delete-proportions"} onClick={this.props.deleteProportions}>[-]</button>
      </div>
    )
  }
}