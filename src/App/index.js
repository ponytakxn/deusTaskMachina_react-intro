import React from 'react';
import AppUI from './AppUI';
/* import './App.css'; */

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
] */


/*SETEAMOS NUESTRO CUSTOM HOOK PARA USARLO EN LOS CAMBIOS AL LOCAL STORAGE*/
function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {
/*SETEAMOS LOS ESTADOS PARA LA LISTA Y LA BARRA DE BÚSQUEDA*/
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
/*SETEAMOS LAS VARIABLES QUE NOS PERMITIRÁN SABER CUÁNTA TASK LLEVAMOS REALIZADAS*/
  const completedTodos = todos.filter(todo => todo.completed).length;   // todo.completed por defecto será true, también !!todo.completed serviría
  const totalTodos = todos.length;

/*FUNCION PARA UTILIZAR LA BARRA DE BÚSQUEDA*/
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText);
    });
  }
  
  /*FUNCIÓN PARA MARCAR UNA TAREA COMO COMPLETADA O PARA ELIMINARLA*/
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed; // aquí estamos diciendo que el estado de .completed va a cambiar al estado contrario
    saveTodos(newTodos);  // aquí está la magia, aquí le estamos cambiando el estado a nuestra lista
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);  //.splice dice "vamos a eliminar desde este Index", cuántos voy a eliminar? le decimos que solo 1 objeto
    saveTodos(newTodos);
  }

  /*FUNCIÓN PARA AGREGAR TAREAS A LA LISTA*/


  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
    />
  );
}

export default App;
