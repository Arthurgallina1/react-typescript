import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import useConsole from "../../hooks/useConsole";
import * as Styles from "./styles";
//import * as S or { Container } ...
import api from "../../services/api";

interface ITodo {
    id: number;
    completed: boolean;
    title: string;
    userId: number;
}
type todoArray = ITodo[];

function Dashboard() {
    const [todos, setTodos] = useState<todoArray>([]);
    const { user } = useAuth();
    // useConsole(JSON.stringify(user));

    useEffect(() => {
        const getTodos = async () => {
            const { data } = await api.get("/todos");
            console.log(data);
            setTodos(data);
        };
        getTodos();
    }, []);

    const getTodoById = (id: number) => {
        const todo = todos.find((todo) => todo.id === id);
        return todo;
    };

    const updateTodo = (todo: ITodo) => {
        const todon = getTodoById(todo.id);
        todon.completed = true;
        return todon;
    };

    console.log(getTodoById(3));
    return (
        <Styles.Container>
            <Styles.Navbar>Olar</Styles.Navbar>
        </Styles.Container>
    );
}

export default Dashboard;
