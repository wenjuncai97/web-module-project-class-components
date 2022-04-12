import React from 'react'
import ReactDom from 'react-dom';
import Form from './Form'
import ToDoList from './TodoList'

const toDo = [
  {
    name: 'Walk the dog',
    id: 1,
    completed: false
  },
  {
    name: 'Learn React',
    id: 2,
    completed: false
  },
  {
    name: 'Have fun',
    id: 3,
    completed: false
  }
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDo
    }
  }

  addToDo = (e, item) => {
    const newToDo = {
      name: toDo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDo: [...this.state.toDo, newToDo]
    })
  }

  clearCompleted = (e) => {
    this.setState({
      toDo: this.state.toDo.filter(item => !item.completed)
    })
  }

  toggleToDo = (itemId) => {
    this.setState({
      toDo: this.state.toDo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="form">
          <Form addToDo={this.addToDo} />
        </div>
        <ToDoList 
          toDo={this.state.toDo}
          toggleItem={this.toggleItem}
          />
        <button
          className="clear-btn"
          onClick={this.clearCompelted}>
          Clear Completed
        </button>
      </div>
    )
  }
}
