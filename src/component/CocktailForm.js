import React, {Component} from 'react'
import ProportionsForm from './ProportionsForm'

export default class CocktailForm extends Component {
  state = {
    name: '',
    description: '',
    instructions: '',
    proportions: [{
      id: 1,
      ingredientName: '',
      quantity: ''
    }]
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.setState({
      name: '',
      description: '',
      instructions: '',
      proportions: [{ 
        id: 1,
        ingredientName: '', 
        quantity: ''
      }]
    })
    this.renderProportionsForm()
    // fetch('api',method:'POST').then(props.getallcocktailrequest - will update the cocktails and add the additions)
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  handleProportions = (event) => {
    let array = Array.from(this.state.proportions).map(proportion=>{
      if (proportion.id === parseInt(event.target.id)) {
        if (event.target.name === "ingredientName") {
          proportion.ingredientName = event.target.value
        } else if (event.target.name === "quantity") {
          proportion.quantity = event.target.value
        }
      } 
      return proportion
    })

    this.setState({ proportions: array})
  }
  
  handleClick = (event) => {
    this.setState({
      proportions:[
        ...this.state.proportions,
        {
          id: this.state.proportions.length+1,
          ingredientName: '',
          quantity: ''
        }
      ]
    })
  }

  deleteProportions = (event) => {
    let deleteProportion = this.state.proportions.find(proportion=>{
      return proportion.id === parseInt(event.target.id)
    })
    let newArray = this.state.proportions.filter(proportion=>{
      if (proportion.id !== deleteProportion.id) {
        return proportion
      }
    })

    this.setState({proportions:newArray})
  }  

  renderProportionsForm = () => {
    if (this.state.proportions) {
      return (
        this.state.proportions.map((p,i)=>{
          return (
            <ProportionsForm
              key={i+"-propsForm"}
              id={i+1}
              deleteProportions={this.deleteProportions}
              handleClick={this.handleClick}
              handleProportions={this.handleProportions}
            />
          )
        })
      )
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
      <h3>Create Cocktail</h3>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          onChange={this.handleChange} 
          value={this.state.name}
        />
        
        <label>Description:</label>
        <input 
          type="text-field" 
          name="description" 
          onChange={this.handleChange} 
          value={this.state.description} 
        />
        
        <label>Instructions:</label>
        <input 
          type="text-field" 
          name="instructions" 
          onChange={this.handleChange} 
          value={this.state.instructions} 
        />
        
        <h4>Proportions:</h4>
        {this.renderProportionsForm()}
        <button type='submit' >Create Cocktail</button>
      </form>
    )
  }
}