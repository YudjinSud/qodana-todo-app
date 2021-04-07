import React, {useEffect, useState} from "react";
import {Router} from "./components/Router";

import "./App.css"

import {db} from "./firebase";

export interface AppProps {
}

async function getCollection(collectionName: string) {
    let todos: any;
    let snapshot = await db.collection(collectionName).get();

    todos = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }))
    return todos;
}

export const App = (props: AppProps) => {
    let [todos, setTodos]: any = useState([]);
    let [done, setDone]: any = useState([]);

    useEffect(() => {
        getCollection("todos").then(todos => {
            setTodos(todos);
        });

        getCollection("done").then(done => {
            setDone(done);
        });
    }, [])

    return (
        <Router
            done={done}
            todos={todos}
        />
    )

}
