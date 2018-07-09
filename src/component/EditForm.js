import React, { Component } from 'react';
import ProportionsForm from '../component/ProportionsForm';

export default class EditForm extends Component {
  state = {
    name: this.props.cocktail.name,
    description: this.props.cocktail.description,
    instructions: this.props.cocktail.instructions,
    proportions: this.props.proportions
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  handleProportions = (event) => {
    const proportions = [...this.state.proportions].map(proportion => {
      if (proportion.id === parseInt(event.target.id)) {
        if (event.target.name === "ingredientName") {
          proportion.ingredient_name = event.target.value
        } else if (event.target.name === "quantity") {
          proportion.quantity = event.target.value
        }
      }
      return proportion
    })
  
    this.setState({proportions})
  }

  handleClick = (event) => {
    console.log(event.target)
    this.setState({
      proportions: [
        ...this.state.proportions,
        {
          id: this.state.proportions.length + 1,
          ingredientName: '',
          quantity: ''
        }
      ]
    })
  }

  deleteProportions = (event) => {
    console.log(event.target)
    let deleteProportion = this.state.proportions.find(proportion => {
      return proportion.id === parseInt(event.target.id)
    })
    let newArray = this.state.proportions.filter(proportion => {
      if (proportion.id !== deleteProportion.id) {
        return proportion
      }
    })

    this.setState({ proportions: newArray })
  }  

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
      <h3>Edit Cocktail</h3>
        <label>Name: </label>
        <input 
          type="text" 
          name="name" 
          onChange={this.handleChange} 
          value={this.state.name}
        />
        
        <label>Description: </label>
        <input 
          type="text-field" 
          name="description" 
          onChange={this.handleChange} 
          value={this.state.description} 
        />
        
        <label>Instructions: </label>
        <input 
          type="text-field" 
          name="instructions" 
          onChange={this.handleChange} 
          value={this.state.instructions} 
        />
        
        <h4>Proportions:</h4>
        {this.state.proportions.map(proportion=>{
          return <ProportionsForm {...proportion} deleteProportions={this.deleteProportions} handleClick={this.handleClick} handleProportions={this.handleProportions} />
        })
        }
        <button type='submit' className="btn btn-primary btn-lg">Edit Cocktail</button>
      </form>
    )
  }
}
