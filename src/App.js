import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { initialState } from './initialState'

import './App.css'

/* MVP COMPLETION STEPS:
 *  (1.) Correct markup (list of todos, input field, submit button, clear all button)
    (2.) Set up functionality to cross out an item. 
        - Set up a styling class to cross out an item.
        - Add some logic in the markup to where if a list item has that class, it is crossed out
        - Add a click handler that when an item is clicked, it toggles the completed boolean
    (3.) Set up form to be driven by state
    (4.) Set up submit handler to add new tasks
    (5.) Set up another submit handler to complete tasks that are complete
 */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: initialState
    }
  }

  toggleCompletedTask = (id) => {
    const completedTask = this.state.todo.map(item =>{
      if (item.id === id) {
        return ({
          ...item, 
          completed: !item.completed
        })
      } else {
        return item
      }
    })

    this.setState({
      todo: completedTask
    })
  }

  addItem = (name) => {
    this.setState({
      todo: [...this.state.todo,
        {
          task: name,
          id: this.state.todo.length,
          complete: false
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} toggleCompletedTask={this.toggleCompletedTask} />
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
