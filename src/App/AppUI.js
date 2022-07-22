import React from 'react';
import { TodoContext } from '../TodoContext/index.js';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { Modal } from '../Modal/index';
import { TodoForm } from '../TodoFrom/index.js';

function AppUI() {
  
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <React.Fragment>
      <TodoCounter/>
          
      <TodoSearch/>
    
      <TodoList>
        {loading && <p>Loading...</p>}
        {error && <p>Ups, an error has ocurred...</p>}
        {(!loading && !searchedTodos.length) && <p>Create your first task!</p>}
        {searchedTodos.map(todo => (
          <TodoItem 
            
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            setOpenModal={setOpenModal}
          />
        ))}
      </TodoList>
      
      {openModal && (
        <Modal>
          <TodoForm 

          />
        </Modal>
      )}

      <CreateTodoButton/>
          
    </React.Fragment>
  );
}

export default AppUI;