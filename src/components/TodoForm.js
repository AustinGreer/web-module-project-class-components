import React, { Component } from 'react'

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleAddNewItem = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.value)
        this.setState({
            value: ''
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddNewItem}>
                    <input
                        type='text'
                        name='todo'
                        placeholder='todo task'
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    />
                    <button type='submit'>Add New Todo Item</button>
                    <button>Clear Completed Tasks</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;