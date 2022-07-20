import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
    
    return(
        <div className='container-add'>
            <input 
                className='add-task'
                placeholder='Add new task'
            />
            <button 
                className='CreateTodoButton'
                
            >
                +
            </button>
        </div>
    );
}

export { CreateTodoButton };