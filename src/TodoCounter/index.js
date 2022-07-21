import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    
    return (
        <div className='TodoCounter'>
            <h2>Deus task Machina</h2>
            <p>You have completed {completedTodos} of {totalTodos} tasks</p>
        </div>
    );
}

export { TodoCounter };