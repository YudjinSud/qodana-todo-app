import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import {Done} from "./done/Done"
import {Todo} from "./todo/Todo"

export interface AppProps {

}

export const App = (props: AppProps) => {
    return (
        <Router>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/Done">Done</Link>
                        </li>
                        <li>
                            <Link to="/Todo">To do</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/Done">
                        <Done/>
                    </Route>
                    <Route path="/Todo">
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}