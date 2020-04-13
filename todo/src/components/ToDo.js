import React, { useState, useReducer } from 'react'

const ToDo = (props) => {

    return (
    <div>
        {props.state.todos.map((item) => {
            return <h3 className={item.completed ? ' completed' : ''} key={item.id} onClick={() => props.dispatch({type: 'TOGGLE_COMPLETED', payload: item.id})}>
                 {item.task}</h3>
        })}
        <button onClick={() => {props.dispatch({ type: "REMOVE_COMPLETED"});}}>Remove Task</button>
    </div>
    )
}

export default ToDo