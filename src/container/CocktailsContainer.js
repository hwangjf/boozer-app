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
    term: '',
    filteredCocktails: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(result => result.json())
      .then(data => this.setState({ cocktails: data ,filteredCocktails: data}))
  }

  handleClick = (event) => {
    let selected = this.state.cocktails.find(c => {
      return c.id === parseInt(event.target.id)
    })
    fetch(`http://localhost:3000/api/v1/cocktails/${parseInt(event.target.id)}`)
      .then(result => result.json())
      .then(data => this.setState({ proportions: data.proportions }))
    this.state.selectedCocktail ? this.setState({ selectedCocktail: selected, displayDetails: true }) : this.setState({ selectedCocktail: selected, displayDetails: false }) 
  }

  handleSearch = (event) => {
    this.setState({ term: event.target.value },this.filterCocktail)
  }

  filterCocktail = () => {
    const filteredCocktails = this.state.cocktails.filter(cocktail=>{
      return (
        cocktail.name.toLowerCase().includes(this.state.term.toLowerCase())
      )
    })
    this.setState({filteredCocktails})
  }

  render() {
    return (
      <div>
        <SearchCocktails handleSearch={this.handleSearch} term={this.state.term}/>
        <CocktailForm />
        {this.state.selectedCocktail ? <CocktailDetails proportions={this.state.proportions} handleEdit={this.handleEdit} selectedCocktail={this.state.selectedCocktail} /> : null }
        <div style={{float:"left"}}>
          <ol>
            {this.state.filteredCocktails.map(c => {
              return (
                <CocktailList
                  key={c.name}
                  handleClick={this.handleClick}
                  cocktail={c}
                />
              )
            })
            }
          </ol>
        </div>
      </div>
    )
  }
}
