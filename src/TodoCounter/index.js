import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <div className='TodoCounter'>
            <h2>Deus task Machina</h2>
            <p>You have completed {completed} of {total} tasks</p>
        </div>
    );
}

export { TodoCounter };