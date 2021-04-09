import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {EntryList} from "./entry-list/EntryList";

import {IEntry} from "./entry/Entry";
import {NewEntry} from "./new-entry-form/NewEntry";

interface IRouterProps {
    done: Array<IEntry>;
    todos: Array<IEntry>;

    addEntry(entry: IEntry, collection: string): any;

    deleteEntry(entry: IEntry, collection: string): any;

    changeCollection(entry: IEntry, from: string, to: string): any;
}

export const Router = (props: IRouterProps) => {
    return <>
        <BrowserRouter>
            <div className={"container col-12"}>
                <div className="d-flex justify-content-center">
                    <div className="p-4">
                        <Link to="/Done">
                            <p>Done</p>
                        </Link>
                    </div>
                    <div className="p-4">
                        <Link to="/Todo">
                            <p>To do</p>
                        </Link>
                    </div>
                </div>
                <NewEntry addEntry={props.addEntry}/>
                <hr/>
                <Switch>
                    <Route path="/Done">
                        <EntryList entryList={props.done}
                                   deleteEntry={props.deleteEntry}
                                   changeCollection={props.changeCollection}/>
                    </Route>
                    <Route path="/Todo">
                        <EntryList entryList={props.todos}
                                   deleteEntry={props.deleteEntry}
                                   changeCollection={props.changeCollection}/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    </>
}


