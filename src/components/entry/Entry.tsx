import React from "react";
import "./Entry.css"

export interface IEntry {
    id: string,
    date: number,
    title: string,
    comment: string,
    done: boolean,
    tags: Array<string>
}


interface IEntryProps {
    entry: IEntry

    deleteEntry(entry: IEntry, collection: string): any;

    changeCollection(entry: IEntry, from: string, to: string): any;
}

export function Entry(props: IEntryProps) {

    function onCheck(e: any) {
        let to: string = props.entry.done ? "todo" : "done";
        let from: string = to === "todo" ? "done" : "todo";
        console.log("entry:" + props.entry, "to: " + to, "from :" + from);

        props.changeCollection(props.entry, from, to);
    }


    function onDelete(e: any) {
        e.preventDefault();
        let collection: string = props.entry.done ? "done" : "todo";
        props.deleteEntry(props.entry, collection);
    }

    let fullDate = new Date(props.entry.date);
    let tags = props.entry.tags?.map((entry, index) => {
        return <p className="badge badge-pill badge-primary" key={index}>
            {entry}
        </p>

    })
    return <>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a onClick={(e) => e.preventDefault()} href="#"
           className="entry list-group-item list-group-item-action flex-column align-items-start"
           id={"entry" + props.entry.id}>
            <div className="d-flex  justify-content-between">
                <h5 className="mb-1">{props.entry.title}</h5>
                <div className="flex-column ">
                    <button type="button" id={"closeButton" + props.entry.id} className="close" aria-label="Close"
                            onClick={onDelete}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="ml-auto">
                        <small>{fullDate.toDateString()}</small>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"
                               onClick={onCheck}/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Mark
                            as {props.entry.done ? "undone" : "done"}</label>
                    </div>
                </div>
            </div>
            <p className="mb-1">{props.entry.comment}</p>
            {tags}
        </a>
    </>
}