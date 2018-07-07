import React from 'react';
import CocktailList from '../component/CocktailList'
import CocktailDetails from '../component/CocktailDetails'
import CocktailForm from '../component/CocktailForm'
import SearchCocktails from '../component/SearchCocktails'

export default class CocktailsContainer extends React.Component {
  state = {
    cocktails: [],
    selectedCocktail: null,
    displayDetails: false,
    proportions: [],
    term: ''
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

  handleSearch = (event) => {
    this.setState({ term: event.target.value })
    this.filterCocktail()
  }

  filterCocktail = () => {
    if (!!this.state.cocktails) {
      let filteredCocktails = this.state.cocktails.filter(cocktail=>{
        console.log(this.state.term.toLowerCase())
        return (
          cocktail.name
          // cocktail.name.toLowerCase().includes(this.state.term.toLowerCase())
        )
      })
      this.setState({cocktails:filteredCocktails})
    }
  }

  render() {
    return (
      <div>
        <SearchCocktails handleSearch={this.handleSearch} term={this.state.term}/>
        <CocktailForm style={{ float: "right" }}/>
        {this.state.selectedCocktail ? <CocktailDetails style={{ float: "right" }} proportions={this.state.proportions} selectedCocktail={this.state.selectedCocktail} /> : null }
        <div style={{float:"left"}}>
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
      </div>
    )
  }
}
