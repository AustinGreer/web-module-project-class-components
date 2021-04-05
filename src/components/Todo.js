import React, { Component } from 'react'

class Todo extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className={this.props.todo.completed === true ? 'completed' : null}>{this.props.todo.task}</li>
                </ul>
            </div>
        )
    }
}

export default Todo;