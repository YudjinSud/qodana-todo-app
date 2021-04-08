import React from "react";
import {Entry, IEntry} from "../entry/Entry";

import "./EntryList.css"

interface IEntryListProps {
    entryList: Array<IEntry>;

    deleteEntry(entry: IEntry, collection: string): any;

    changeCollection(entry: IEntry, from: string, to: string): any;
}


export function EntryList(props: IEntryListProps) {

    let list: Array<any> | undefined = [];
    list = props.entryList.map((entry, index) => {
        let entryProp: IEntry = {
            id: entry.id,
            date: entry.date,
            title: entry.title,
            comment: entry.comment,
            done: entry.done,
            tags: entry.tags,
        }
        return <Entry key={index}
                      entry={entryProp}
                      deleteEntry={props.deleteEntry}
                      changeCollection={props.changeCollection}
        />
    })
    return (
        <div className="container col-12 col-sm-12 col-md-8 col-lg-6 col-xl-3">
            <div className="list-group">{list}</div>
        </div>
    )
}