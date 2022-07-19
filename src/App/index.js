import React from 'react';
import AppUI from './AppUI';
/* import './App.css'; */

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso de intro a React', completed: true },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {
  /*SETEAMOS LOS ESTADOS PARA LA LISTA Y PARA LA BARRA DE BÚSQUEDA*/
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  /*FUNCION PARA UTILIZAR LA BARRA DE BÚSQUEDA*/
  const completedTodos = todos.filter(todo => todo.completed).length;   // todo.completed por defecto será true, también !!todo.completed serviría
  const totalTodos = todos.length;

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
    setTodos(newTodos);  // aquí está la magia, aquí le estamos cambiando el estado a nuestra lista
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);  //.splice dice "vamos a eliminar desde este Index", cuántos voy a eliminar? le decimos que solo 1 objeto
    setTodos(newTodos);
  }

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
