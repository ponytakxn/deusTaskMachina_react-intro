import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoItem.css';
import { TiTick } from 'react-icons/ti';
import { BsBookmarkXFill } from 'react-icons/bs';

function TodoItem(props){
    return(
        <div className='container-item'>
            <li className={`TodoItem ${props.completed && 'TodoItem--complete'}`}>
                <span 
                    className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                    onClick={props.onComplete}
                >
                    <TiTick />   
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} id="task-name">
                    {props.text}
                </p>
                <span 
                    className="Icon Icon-delete"
                    onClick={props.onDelete}
                >
                    <BsBookmarkXFill />
                </span>
            </li>
        </div>
    );
}

export { TodoItem };