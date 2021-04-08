import React, {useState} from "react";
import "./NewEntry.css"
import {IEntry} from "../entry/Entry";

import {useLocation} from 'react-router-dom'

interface INewEntry {
    addEntry(entry: IEntry, collection: string): any;
}


export function NewEntry(props: INewEntry) {

    function addEntry(e: any) {
        e.preventDefault();

        let collection = location.pathname;
        collection = collection
            .substring(1, collection.length)
            .toLowerCase();
        let done = collection !== "todos";

        let entry: IEntry = {
            done: done,
            title: title,
            comment: comment,
            date: Date.now(),
            tags: [],
            id: title,
        }

        props.addEntry(entry, collection);
    }

    let [title, setTitle]: any = useState([]);
    let [comment, setComment]: any = useState([]);
    let [tags, setTags]: any = useState([]);

    let location = useLocation();

    return <>
        <div className="container col-12 col-sm-12 col-md-8 col-lg-6 col-xl-3 justify-content-center">
            <form onSubmit={addEntry}>
                <div className=" form-group">
                    <label htmlFor="taskTitle">Task title</label>
                    <input type="text" className="form-control" id="taskTitle"
                           placeholder="Your task..."
                           onChange={e => setTitle(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="commentField">Comment</label>
                    <textarea className="form-control" id="commentField"
                              onChange={e => setComment(e.target.value)}/>
                </div>
                <div className="d-flex flex-column">
                    <button type="submit" className="btn btn-outline-primary add-button">Add</button>
                </div>
            </form>
        </div>
    </>
}