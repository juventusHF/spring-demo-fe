import {useEffect, useState} from "react";
import {getAllTodos} from "../api/todo-api.ts";
import type {Todo} from "../model/todo.ts";

export default function TodoPage() {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        const fetchTodos = async () => {
            const result = await getAllTodos();
            setTodos(result);
        }
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>My Todo App</h1>
            {todos.length}
        </div>
    )
}