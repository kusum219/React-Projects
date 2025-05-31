import React, { useState } from "react"
import "./Todo.css"


export default function Todo(){

    let [input, setInput] = useState("");
    let [todos, setTodos] = useState([]);

    function Add(e){
        e.preventDefault();

        let trimmedInput = input.trim();
        if(trimmedInput.length === 0) return null;
        setTodos(prevTodos=>{
            return[...prevTodos,
                {id: crypto.randomUUID(), title:input}]
        })

        setInput("")
    };
    
    function remove(id){
        setTodos( prevTodos=>{
        return prevTodos.filter(todo => todo.id != id);
        })
    }

    return(
        <div id="Todo">
        <div id="container">

            <div id="head">
                <h1> ToDo-List</h1>
                
                <form onSubmit={Add}>
                    <input onChange={e=>setInput(e.target.value)} value={input} type="text" placeholder="Enter Tasks To Do" />
                    <button>Add</button>
                </form>
            </div>

            <div id="body">
            <ul>
            {todos.length <= 0 && "Enter Tasks To Do"}

            {todos.map(todo=>{
                return(
                    <li key={todo.id}>
                        <label>{todo.title}</label>
                        <button onClick={()=>remove(todo.id)}>Delete</button>
                    </li>
                )
            })}
            </ul>
            </div>

        </div>
        </div>
    )
}