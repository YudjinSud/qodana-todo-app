import React from "react";
import {Entry} from "../Entry";

import {doneList} from "./DoneList";

interface IDoneProps {
}


export function Done() {
    let list: Array<any> | undefined = [];

    list = doneList.map((entry, index) => {
        return <Entry key={index}
                      date={entry.date}
                      task={entry.task}

        />
    })

    return (
        <div>{list}</div>
    )
}