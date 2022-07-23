import React from 'react';
import './FirstTodo.css';

function FirstTodo() {

    return (
        <div className='first-container'>
            <p>It seems you don't have any task to do..</p>
            <span className='imgcontainer'>
                <img src={require("./Complete-task.png")} alt='' className='first-image'/>
            </span>
            <p>Add new tasks with the button</p>
            <span className='button'>
                +
            </span>
            
        </div>
    )

}

export { FirstTodo };