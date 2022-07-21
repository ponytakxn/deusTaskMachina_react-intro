import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        editTask,
        setEditTask,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onChangeEditValue = (event) => {
        setEditTask(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };


    return (
        <form >
            <label></label>
            <textarea 
                placeholder='Set your new task name'
                value={editTask}
                onChange={onChangeEditValue}
            />
            <div>
                <button
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Aceptar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };