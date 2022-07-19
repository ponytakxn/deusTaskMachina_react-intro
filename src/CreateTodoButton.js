import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props){
    return(
        <div className='container-add'>
            <input className='add-task' placeholder='Add new task'/>
            <button className='CreateTodoButton'>+</button>
        </div>
    );
}

export { CreateTodoButton };