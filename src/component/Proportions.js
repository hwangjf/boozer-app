import React, {Component} from 'react';

export default class Proportions extends Component { 
  render() {
    return (
      this.props ? 
        <div>
          {this.props.proportions.map(p => {
            return (
              <ul>
                <li>
                <strong>ingredient name:</strong> {p.ingredient_name}, <strong>amount:</strong> {p.amount}
                </li>
              </ul>
            )
          })}
        </div>
      : null
    )
  }
}