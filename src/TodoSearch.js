import React from 'react';
import './TodoSearch.css';

function TodoSearch(){
    return(
        <div className='container'>
            <input className='TodoSearch' placeholder="..what are you looking for?" />
        </div>
    );
}

export {TodoSearch};