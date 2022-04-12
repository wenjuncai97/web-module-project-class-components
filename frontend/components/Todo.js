import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.toggleToDo(this.props.toDo.id);
  }

  render() {
    return (
      <li onClick={this.handleClick}>{this.props.toDo.task} {this.props.toDo.completed ? <span>- completed</span> : <span></span>}</li>
    )
  }
}
