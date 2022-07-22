import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton(){
    const { 
        addTask, 
        setAddTask, 
        addNewTask,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onAddValueChange = (event) => {
        setAddTask(event.target.value);
    }

    return(
        <div className='container-add'>
            <input 
                className='add-task'
                value={addTask}
                onChange={onAddValueChange}
                placeholder='Add new task'
            />
            <button 
                className='CreateTodoButton Button-desktop'
                onClick={addNewTask}
            >
                +
            </button>

            <button 
                className='CreateTodoButton Button-mobile'
                onClick={setOpenModal}
            >
                +
            </button>
        </div>
    );
}

export { CreateTodoButton };