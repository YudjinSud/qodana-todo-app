import React from "react";
import "./NewEntry.css"

export function NewEntry() {
    return <>
        <div className="d-flex justify-content-center">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Task title</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1"
                           placeholder="Your task..."/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Comment</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1"/>
                </div>
                <div className="d-flex flex-column">
                    <button type="submit" className="btn btn-outline-primary add-button">Add</button>
                    <button type="submit" className="btn btn-outline-primary add-button">Save</button>
                </div>
            </form>
        </div>
    </>
}