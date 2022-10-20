import React, {useState} from 'react';
import Todo from "./Todo";
import './todoapp.css'
import {default as UUID} from "node-uuid";

const Todoapp= () => {
    const [title, setTitle] = useState('hola')
    const [todos, setTodos] = useState([])



    const handleChange = (e) => {
        const value = e.target.value
        setTitle(value)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: UUID.v4(),
            title: title,
            completed: false,
        };

        const temp = [ ... todos];
        temp.unshift(newTodo);
        setTodos(temp)
        setTitle("")
    }

    //Funcion para editar tareas
    function handleUpdate(id, value) {
        const temp = [...todos]
        const item = temp.find( item => item.id === id);
        item.title = value;
        setTodos(temp)

    }

    //Funcion para eliminar tareas
    function handleDelete(id) {
        const temp = todos.filter( item => item.id !== id)
        setTodos(temp)


    }
    return(
        <>

            <div className={"todoContainer"}>
                <h1 className={"title-form"}>Lista de tareas</h1>
                <form onSubmit={handleSubmit} className={"todoCreateForm"}>
                    <input onChange={handleChange} className={"todoInput"} value={title}/>
                    <input onClick={handleSubmit} className={"buttonCreate"} type={"submit"} />
                </form>

                <div className={"todosContainer"}>
                    {todos.map(item => (
                        <Todo onUpdate={handleUpdate} key={item.id} item={item} onDelete={handleDelete} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default Todoapp;