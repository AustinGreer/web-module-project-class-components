import React, { Component } from 'react'

class Todo extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.todo.task}</li>
                </ul>
            </div>
        )
    }
}

export default Todo;