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
    
    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='todo'
                        placeholder='todo task'
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    />
                    <button>Add New Todo Item</button>
                    <button>Clear Completed Tasks</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;