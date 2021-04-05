import React, { Component } from 'react'

class TodoForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='todo'
                        placeholder='todo task'
                    />
                    <button>Add New Todo Item</button>
                    <button>Clear Completed Tasks</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;