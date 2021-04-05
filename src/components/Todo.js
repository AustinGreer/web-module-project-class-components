import React, { Component } from 'react'

class Todo extends Component {
    handleCompletedTask = () => {
        this.props.toggleCompletedTask(this.props.todo.id)
    }
    
    render() {
        return (
            <div>
                <ul>
                    <li 
                        className={this.props.todo.completed ? 'completed' : 'incomplete'}
                        onClick={this.handleCompletedTask}
                    >{this.props.todo.task}</li>
                </ul>
            </div>
        )
    }
}

export default Todo;