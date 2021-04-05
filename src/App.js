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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
