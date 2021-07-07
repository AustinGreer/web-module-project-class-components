import React, { Component } from 'react';
import styled from 'styled-components';

class Todo extends Component {
    handleCompletedTask = () => {
        this.props.toggleCompletedTask(this.props.todo.id)
    }
    
    render() {
        return (
            <StyledTodo>
                <ul>
                    <li 
                        className={this.props.todo.completed ? 'completed' : 'incomplete'}
                        onClick={this.handleCompletedTask}
                    >{this.props.todo.task}</li>
                </ul>
            </StyledTodo>
        )
    }
}

const StyledTodo = styled.div`
    font-size: 30px;
    font-family: sans-serif;
    
    ul {
        list-style-type: none;
    }
`

export default Todo;