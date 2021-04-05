import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todo.map(item => {
                    return <Todo todo={item} />
                })}
            </div>
        )
    }
}

export default TodoList

