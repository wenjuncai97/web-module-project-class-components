import React from 'react'

export default class Todo extends React.Component {
  constructor () {
    super();
  }
  render() {
    return (
      <div onClick={() => props.item.id} className ={`item${props.item.completed ? 'completed' : ''}`}>
        <p>{this.props.item.name}</p>
      </div>
    )
  }
}
