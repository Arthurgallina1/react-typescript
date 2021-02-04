import React, { useState, useLayoutEffect, useEffect } from "react";

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function LayoutEff() {
    const [description, setDescription] = useState("");
    const [todo, setTodo] = useState<Todo>();

    useLayoutEffect(() => {}, []);
    useEffect(() => {
        console.log("ly2");
        async function loadData() {
            const resp = await fetch(
                "https://jsonplaceholder.typicode.com/todos/" + description
            );
            const json = await resp.json();
            setTodo(json);
            console.log(json);
        }
        loadData();
        //ex 1
        // let currentRender = true;
        // setTimeout(() => {
        //     if (currentRender) {
        //         console.log(description);
        //     } else {
        //         console.log("ops im done");
        //     }
        // }, 1500);
        // return () => {
        //     currentRender = false;
        // };

        // both do the same thing. ^ in case we don't have a callback from the call
        // ex 2
        // const id = setTimeout(() => {
        //     console.log(description);
        // }, 1500);

        // return function clearIntervalFromSetTimeout() {
        //     clearInterval(id);
        // };
    }, [description]);
    return (
        <div>
            {todo?.title}
            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
    );
}
