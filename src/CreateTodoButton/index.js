import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(msg);
    }
    
    return(
        <div className='container-add'>
            <input className='add-task' placeholder='Add new task'/>
            <button 
                className='CreateTodoButton'
                onClick={() => onClickButton('Aquí se debería abrir el modal')}
            >
                +
            </button>
        </div>
    );
}

export { CreateTodoButton };