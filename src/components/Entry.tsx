import React from "react";


export interface IEntry {
    id: string,
    date: string,
    title: string,
    comment: string,
    done: boolean,
    tags: Array<string>
}


export function Entry(props: IEntry) {
    let fullDate = new Date(props.date);
    console.log(props.done);
    let tags = props.tags.map((entry, index) => {
        return <p className="badge badge-pill badge-primary">
            {entry}
        </p>

    })
    return <>
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex  justify-content-between">
                <h5 className="mb-1">{props.title}</h5>
                <div className="flex-column ">
                    <div className="ml-auto">
                        <small>{fullDate.toDateString()}</small>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Mark
                            as {props.done ? "undone" : "done"}</label>
                    </div>
                </div>
            </div>
            <p className="mb-1">{props.comment}</p>
            {tags}
        </a>
    </>
}