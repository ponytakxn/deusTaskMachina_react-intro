import React from 'react';
import './TodoItem.css';

function TodoItem(props){
    return(
        <div className='container-item'>
            <li className={`TodoItem ${props.completed && 'TodoItem--complete'}`}>
                <span 
                    className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                    onClick={props.onComplete}
                >
                    ᄼ   
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    {props.text}
                </p>
                <span 
                    className="Icon Icon-delete"
                    onClick={props.onDelete}
                >
                    X
                </span>
            </li>
        </div>
    );
}

export { TodoItem };