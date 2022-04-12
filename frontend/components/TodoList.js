import React from 'react'
import ToDo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.toDo.map(toDo => {
            return (<ToDo key={toDo.id} toggleToDo={this.props.toggleToDo} toDo={toDo} />)
          })
        }
      </ul>
    )
  }
}
