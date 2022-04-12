import React from 'react'
import ToDo from './Todo'

export default class TodoList extends React.Component {
  constructor () {
    super();
  }
  render() {
    return (
      <div className="toDo-list">
        {props.toDo.map(item => (
          <ToDo toggleItem={props.toggleItem} key={item.id} item={item} />
        ))}
      </div>
    )
  }
}
