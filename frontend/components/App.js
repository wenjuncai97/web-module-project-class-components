import React from 'react'
import Form from './Form'
import ToDoList from './TodoList'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: [
        {
          task: 'Walk the dog',
          id: 1,
          completed: false
        },
        {
          task: 'Learn React',
          id: 2,
          completed: false
        },
        {
          task: 'Have fun',
          id: 3,
          completed: false
        }
      ]
    }
  }

  addToDo = (task) => {
    const newToDo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      toDo: [...this.state.toDo, newToDo]
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      toDo: this.state.toDo.filter(item => {
        return (item.completed === false);
      })
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
    const { toDo } = this.state;
    return (
      <div className="App">
        <h1>TODOS</h1>
        <div className="form">
          <ToDoList
            toDo={toDo}
            toggleToDo={this.toggleToDo}
          />
          <Form addToDo={this.addToDo} />
        </div>
        <button
          className="clear-btn"
          onClick={this.clearCompleted}>
          Clear Completed
        </button>
      </div>
    )
  }
}
