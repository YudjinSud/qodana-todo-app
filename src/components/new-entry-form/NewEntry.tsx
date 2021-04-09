import React, {useState} from "react";
import "./NewEntry.css"
import {IEntry} from "../entry/Entry";

import {useLocation} from 'react-router-dom'

interface INewEntry {
    addEntry(entry: IEntry, collection: string): any;
}


export function NewEntry(props: INewEntry) {

    function parseJson(e: any) {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onload = function (event) {
            try {
                let jsonObj = JSON.parse(event?.target?.result as string);
                setState(jsonObj?.title, jsonObj?.comment, jsonObj?.tags.toString());
            } catch (e) {
                alert("Error while parsing json file");
            }
        }
        reader.readAsText(file);
    }


    function addEntry(e: any, entry?: IEntry) {
        e.preventDefault();

        let collection = getRoute();
        let done = collection !== "todo";

        let newEntry: IEntry = {
            done: done,
            title: title,
            comment: comment,
            date: Date.now(),
            tags: tags.split(','),
            id: title,
        }
        if (!entry) entry = newEntry;

        props.addEntry(entry, collection)
            .then(function () {
                setState('', '', '', );
            });
    }

    function setState(title: string, comment: string, tags: string) {
        setTitle(title);
        setComment(comment);
        setTags(tags);
    }


    function getRoute() {
        let collection = location.pathname;
        collection = collection
            .substring(1, collection.length)
            .toLowerCase();
        return collection;
    }

    let [title, setTitle]: any = useState([]);
    let [comment, setComment]: any = useState([]);
    let [tags, setTags]: any = useState('');

    let location = useLocation();

    return <>
        <div className="container col-12 col-sm-12 col-md-8 col-lg-6 col-xl-3 justify-content-center">
            <h2 className="text-center">{getRoute().toUpperCase() + " list"}</h2>
            <form onSubmit={addEntry}>
                <div className=" form-group">
                    <label htmlFor="taskTitle">Task title</label>
                    <input type="text" className="form-control" id="taskTitle"
                           placeholder="Your task..."
                           value={title}
                           onChange={e => setTitle(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="commentField">Comment</label>
                    <textarea className="form-control" id="commentField"
                              maxLength={100}
                              value={comment}
                              onChange={e => setComment(e.target.value)}/>
                </div>
                <div className=" form-group">
                    <label htmlFor="taskTitle">Tags</label>
                    <input type="text" className="form-control" id="taskTitle"
                           placeholder="Enter your comma-separated tags"
                           value={tags}
                           onChange={e => setTags(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="jsonInput">Or create from json file</label>
                    <input type="file" className="form-control-file" id="jsonInput"
                           accept=".json"
                           onChange={parseJson}/>
                </div>
                <div className="d-flex flex-column">
                    <button type="submit" className="btn btn-outline-primary add-button">Add</button>
                </div>
            </form>
        </div>
    </>
}