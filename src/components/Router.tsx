import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {EntryList} from "./entry-list/EntryList";

import {IEntry} from "./Entry";
import {NewEntry} from "./new-entry-form/NewEntry";

interface IRouterProps {
    done: Array<IEntry>;
    todos: Array<IEntry>;
}

export const Router = (props: IRouterProps) => {
    return <>
        <BrowserRouter>
            <div className={"container col-8"}>
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
                <NewEntry/>
                <hr/>
                <Switch>
                    <Route path="/Done">
                        <EntryList entryList={props.done}/>
                    </Route>
                    <Route path="/Todo">
                        <EntryList entryList={props.todos}/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    </>
}


