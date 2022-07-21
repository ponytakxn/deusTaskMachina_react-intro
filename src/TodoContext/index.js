import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const  TodoContext = React.createContext(); //dentro de TodoContext vamos a tener por defecto 2 elementos: Provider y Consumer

function TodoProvider(props) {
    /*SETEAMOS LOS ESTADOS PARA LA LISTA Y LA BARRA DE BÚSQUEDA*/
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [addTask, setAddTask] = React.useState('');
    const [editTask, setEditTask] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
        
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
    const addNewTask = () => {
        let newTodos = [...todos];
        addTask ? newTodos.push({
            text: addTask,
            completed: false
        }) : newTodos = [...todos];

        saveTodos(newTodos);
    }

    /*FUNCIÓN PARA EDITAR ALGUNA TAREA DE LA LISTA*/
    

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            completeTodo,
            deleteTodo,
            searchValue,
            setSearchValue,
            searchedTodos,
            loading,
            error,
            addNewTask,
            addTask,
            setAddTask,
            editTask,
            setEditTask,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>

    );
}

export { TodoContext, TodoProvider };