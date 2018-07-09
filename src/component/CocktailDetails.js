import React, {Component} from 'react';
import Proportions from './Proportions';
import EditForm from './EditForm';

export default class CocktailDetails extends Component {
  state = {
    cocktail: null,
    proportions: [],
    showEdit: false
  }

  static getDerivedStateFromProps(prevProps,state) {
    return state = {cocktail: prevProps.selectedCocktail}
  }

  // componentDidUpdate() {
  //   window.scrollTo(0,0)
  // }

  handleClick = (event) => {
    this.state.showEdit ? this.setState({ showEdit: false }) : this.setState({ showEdit: true })
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
        <button type="button" selectedCocktail={this.props.selectedCocktail} onClick={this.handleClick} >Edit</button>
        <br />
        {this.state.showEdit ? <EditForm cocktail={this.props.selectedCocktail} proportions={this.props.proportions} /> : null}
      </div>
    )
  }
}