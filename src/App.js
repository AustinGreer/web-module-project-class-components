import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';
import styled from 'styled-components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [{
        task: '',
        id: 0,
        completed: false
      }]
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

  clearItem = () => {
    const filteredItems = this.state.todo.filter(item => {
      return !item.completed
    })

    this.setState({
      todo: filteredItems
    })
  }

  render() {
    return (
      <StyledContainer>
        <h1>Welcome to your Todo App!</h1>
        <TodoList todo={this.state.todo} toggleCompletedTask={this.toggleCompletedTask} />
        <TodoForm addItem={this.addItem} clearItem={this.clearItem} />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    font-family: sans-serif;
  }
`


export default App;
