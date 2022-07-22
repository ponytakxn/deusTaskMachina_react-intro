import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTask, 
        setAddTask, 
        addNewTask,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onChangeEditValue = (event) => {
        setAddTask(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addNewTask(addTask);
        setOpenModal(false);
        setAddTask('');
    }

    const onCancel = () => {
        setOpenModal(false);
        setAddTask('');
    };


    return (
        <form onSubmit={onSubmit} >
            <label>Add your new task</label>
            <textarea 
                placeholder='Sleep all day'
                value={addTask}
                onChange={onChangeEditValue}
            />
            <div className='button-container'>
                <button
                    className='addnew-button cancel-button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='addnew-button accept-button'
                    type="submit"
                >
                    Aceptar
                </button>
            </div>
        </form>
        
    );
}

export { TodoForm };