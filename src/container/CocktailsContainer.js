import React from 'react';
import CocktailList from '../component/CocktailList'
import CocktailDetails from '../component/CocktailDetails'
import CocktailForm from '../component/CocktailForm'

export default class CocktailsContainer extends React.Component {
  state = {
    cocktails: [],
    selectedCocktail: null,
    displayDetails: false,
    proportions: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(r => r.json())
      .then(d => this.setState({ cocktails: d }))
  }

  handleClick = (event) => {
    let selected = this.state.cocktails.find(c => {
      return c.id === parseInt(event.target.id)
    })
    fetch(`http://localhost:3000/api/v1/cocktails/${parseInt(event.target.id)}`)
      .then(r => r.json())
      .then(d => this.setState({ proportions: d.proportions }))
    this.state.selectedCocktail ? this.setState({ selectedCocktail: selected, displayDetails: true }) : this.setState({ selectedCocktail: selected, displayDetails: false }) 
  }

  render() {
    return (
      <div>
        <CocktailForm />
        {this.state.selectedCocktail ? <CocktailDetails proportions={this.state.proportions} selectedCocktail={this.state.selectedCocktail} /> : null }
        <ol>
          {this.state.cocktails.map(c => {
            return (
              <CocktailList
                key={c.name}
                handleClick={this.handleClick}
                cocktail={c}
              />
            )
          })}
        </ol>
      </div>
    )
  }
}
