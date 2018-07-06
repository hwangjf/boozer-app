import React, {Component} from 'react'

export default class CocktailForm extends Component {
  state = {
    name: '',
    description: '',
    instructions: '',
    proportions: {
      ingredientName:'',
      quantity:''
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.setState({
      name: '',
      description: '',
      instructions: '',
      proportions: { 
        ingredientName: '', 
        quantity: ''
      }
    })
    // fetch('api',method:'POST').then(props.getallcocktailrequest - will update the cocktails and add the additions)
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleIngredientName = (event) => {
    this.setState({ ...this.state, proportions: {...this.state.proportions, ingredientName: event.target.value } })
  }

  handleQuantity = (event) => {
    this.setState({ ...this.state, proportions: { ...this.state.proportions, quantity:event.target.value}})
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
        <label>Ingredient Name:</label>
        <input 
          type="text" 
          name="ingredientName"
          onChange={this.handleIngredientName}
          value={this.state.proportions.ingredientName} 
        />

        <label>Quantity</label>
        <input 
          type="text" 
          name="quantity"
          onChange={this.handleQuantity}
          value={this.state.proportions.quantity} 
        />
        <button type='submit' >Create Cocktail</button>
      </form>
    )
  }
}