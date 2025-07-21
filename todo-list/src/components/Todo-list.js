import { useState } from "react";

export default function TODO() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');


    const addTodo = () => {
        if (input.trim()) {
            setTodos([{ id: Date.now(), item: input.trim() }, ...todos]);
            console.log(todos);
            setInput("");
        }
    }

    const deleteTodo = (id) => {
        if (id) {
            let newTodos = todos.filter((item => item.id !== id));
            setTodos(newTodos);
        }
    }

    const filterTodos = todos.filter((todo ) => { 
        return todo.item.toLowerCase().includes(search.toLowerCase());
 }); 

    return (
        <>
            <div>
                Your Todos.
            </div>

            <div>
                <h1> To Do List.</h1>

                <div className="serchBox">
                    <input
                        type="text"
                        id="addtodo"
                        value={input}
                        placeholder="Enter your todo"
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addTodo()}

                    />

                    <button
                        id="addTodo"
                        onClick={(e) => addTodo()}
                    >
                        Add Todos
                    </button>


                    <input
                        id="searchBox"
                        type="text"
                        value={search}
                        placeholder="Search Todos"
                        onChange={(e) => setSearch(e.target.value)}
                    />


                </div>
            </div>

            <div className="todoListContainer">
                <div className="todoList">
                    <ul>
                        { filterTodos ? filterTodos.map(todo => (
                            <li key={todo.id}> {todo.item}
                                <button
                                    id="deleteBtn"
                                    onClick={(item) => deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                            </li>
                        )) : <p>Nothing to display</p>}
                    </ul>
                </div>
            </div>
        </>
    )
}