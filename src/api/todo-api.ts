import type {Todo} from "../model/todo.ts";

const BASE_URL = "http://localhost:8080/api/todos";

export async function getAllTodos(): Promise<Todo[]> {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            console.error(`Response status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}