import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    
    return(
        
            <div className='container'>
                <input 
                    className='TodoSearch'
                    placeholder="..what are you looking for?"
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </div>
        
    );
}

export {TodoSearch};