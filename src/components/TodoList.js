import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todo.map(item => {
                    return <Todo key={item.id} todo={item} toggleCompletedTask={this.props.toggleCompletedTask} />
                })}
            </div>
        )
    }
}

export default TodoList

