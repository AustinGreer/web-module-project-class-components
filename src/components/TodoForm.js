import React, { Component } from 'react';
import styled from 'styled-components';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleAddNewItem = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.input)
        this.setState({
            input: ''
        })
    }

    handleClearItems = (event) => {
        event.preventDefault();
        this.props.clearItem()
    }
    
    render() {
        return (
            <StyledForm>
                <form onSubmit={this.handleAddNewItem}>
                    <input
                        type='text'
                        name='todo'
                        placeholder='todo task'
                        value={this.state.input}
                        onChange={this.handleInputChange}
                    />
                    <StyledButtons>
                        <button type='submit'>Add New Todo Task</button>
                        <button onClick={this.handleClearItems}>Clear Completed Tasks</button>
                    </StyledButtons>
                </form>
            </StyledForm>
        )
    }
}

const StyledForm = styled.div`
    width: 30%;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            width: 100%;
            margin-bottom: 5%;
        }
    }
`

const StyledButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    
    button {
        background: gold;
        color: black;
        font-size: 18px;
        border-radius: 20px;
    }
`

export default TodoForm;