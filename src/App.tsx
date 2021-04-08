import React, {useEffect, useState} from "react";
import {Router} from "./components/Router";

import "./App.css"

import {_addEntry, _deleteEntry, _getCollection} from "./api/Api";
import {IEntry} from "./components/entry/Entry";

export interface AppProps {
}


export const App = (props: AppProps) => {

    function updateCollection(collection: string) {
        _getCollection(collection)
            .then(list => {
                collection === "todos"
                    ? setTodos(list)
                    : setDone(list);
            })
    }

    function addEntry(entry: IEntry, collection: string) {
        _addEntry(entry, collection)
            .then(() => updateCollection(collection));
    }

    function deleteEntry(entry: IEntry, collection: string) {
        _deleteEntry(entry, collection)
            .then(() => updateCollection(collection));
    }

    function changeCollection(entry: IEntry, from :string, to : string) {
        entry.done = !entry.done;
        _deleteEntry(entry, from)
            .then(() => updateCollection(from))
            .then(() => addEntry(entry, to))
            .then(() => updateCollection(to));
    }

    let [todos, setTodos]: any = useState([]);
    let [done, setDone]: any = useState([]);

    useEffect(() => {
        _getCollection("todos").then(todos => {
            setTodos(todos);
        });

        _getCollection("done").then(done => {
            setDone(done);
        });
    }, [])

    return (
        <Router
            addEntry={addEntry}
            deleteEntry={deleteEntry}
            changeCollection={changeCollection}
            done={done}
            todos={todos}
        />

    )

}
