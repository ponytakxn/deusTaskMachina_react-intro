import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton(){
    const { addTask, setAddTask, addNewTask } = React.useContext(TodoContext);
    
    const onAddValueChange = (event) => {
        console.log(event.target.value);
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
                className='CreateTodoButton'
                onClick={addNewTask}
            >
                +
            </button>
        </div>
    );
}

export { CreateTodoButton };