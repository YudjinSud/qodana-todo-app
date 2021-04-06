import React from "react";



interface IEntryProps {
    date: string,
    task: string,
}


export function Entry(props : IEntryProps) {
    return (
        <div>
            <p>{props.date}</p>
            <p>{props.task}</p>
        </div>
    )
}