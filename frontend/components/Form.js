import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.setState = {
      toDoText: ''
    }
  }

  handleChange = e => {
    this.setState({
      toDoText: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToDo(e, this.state.toDoText)
    this.setState({
      toDoText: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        name="toDo"
        value={this.state.toDoText}
        onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}

