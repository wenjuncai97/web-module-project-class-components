import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoText: ''
    }
  }

  handleChange = e => {
    this.setState({
      toDoText: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.toDoText)
    this.setState({
      toDoText: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        onChange={this.handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

