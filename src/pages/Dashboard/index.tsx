import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import useConsole from "../../hooks/useConsole";
import * as Styles from "./styles";
//import * as S or { Container } ...
import api from "../../services/api";
import Person from "../../components/Person";
import LayoutEff from "../../components/LayoutEff";
enum Status {
    todo,
    progress,
    complete,
}

let todoStatus: Status = Status.todo;

let notSure: unknown = 4;

interface ITodo {
    id: number;
    status: Status;
    title: string;
    userId: number;
}

type todoArray = ITodo[];

interface LabeledValue {
    label: string;
    color?: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}
let myObj = { size: 10, label: "size 10 obj" };
// printLabel(myObj);

interface SquareConfig {
    color?: string;
    width: number;
}

//interface com funções
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub) < -1;
    return result;
};

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSq = { color: "white", area: 100 };
    if (config.color) {
        newSq.color = config.color;
    }
    console.log(newSq);
    return newSq;
}
createSquare({ color: "blue", width: 20 });

function buildName(firstName: string, lastName?: string) {
    return firstName + " " + lastName;
}
// buildName("art");

function buildFullName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
// buildFullName("art", "tuca", "123");

function Dashboard() {
    const [todos, setTodos] = useState<todoArray>([]);
    const { user } = useAuth();
    // useConsole(JSON.stringify(user));

    useEffect(() => {
        const getTodos = async () => {
            const { data } = await api.get("/todos");
            setTodos(data);
        };
        getTodos();
    }, []);

    const getTodo = (todo: ITodo) => {};

    const getTodoById = (id: number) => {
        const todo = todos.find((todo) => todo.id === id);
        return todo;
    };

    const updateTodo = (todo: ITodo) => {
        const todon = getTodoById(todo.id);
        return todon;
    };

    // let todo: ITodo = getTodoById(3);
    // console.log(updateTodo(todo));
    return (
        <Styles.Container>
            <Styles.Navbar>Olar</Styles.Navbar>
            <Person
                name='Arthur'
                birthDate={new Date("2020-01-01")}
                location={{ long: "0", lat: "0", height: 0 }}
            />
            <LayoutEff />
        </Styles.Container>
    );
}

export default Dashboard;
