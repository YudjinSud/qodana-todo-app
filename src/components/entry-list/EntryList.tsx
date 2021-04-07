import React from "react";
import {Entry, IEntry} from "../Entry";

import "./EntryList.css"

interface IEntryListProps {
    entryList: Array<IEntry>;
}


export function EntryList(props: IEntryListProps) {
    let list: Array<any> | undefined = [];
    list = props.entryList.map((entry, index) => {
        return <Entry key={index}
                      id={entry.id}
                      date={entry.date}
                      title={entry.title}
                      comment={entry.comment}
                      done={entry.done}
                      tags={entry.tags}
        />
    })
    return (
        <div className="col-12">
            <div className="list-group">{list}</div>
        </div>
    )
}