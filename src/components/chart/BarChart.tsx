import React, {useEffect} from 'react';
import {IEntry} from "../entry/Entry";

import "./BarChart.css";

export interface IChart {
    data: Array<IEntry>
}

interface IDataSet {
    [key: string]: any,
}

export function BarChart(props: IChart) {
    let ref = React.createRef<HTMLCanvasElement>();

    function createDataSet() {
        let set: IDataSet = new Map();
        for (let entry of props.data) {
            for (let tag of entry.tags) {
                if (!set.has(tag)) {
                    set.set(tag, 1);
                } else {
                    set.set(tag, set.get(tag) + 1);
                }
            }
        }

        return set;
    }


    useEffect(() => {
        const dataSet = createDataSet();
        console.log(dataSet);
        const context = ref.current?.getContext('2d');
        if (context == null) throw new Error('Could not get context');
        context.clearRect(0, 0, 2000, 2000);
        context.fillStyle = 'rgb(100, 200, 0)';
        let counter = 1;
        let arr = Array.from(dataSet.keys());
        for (let entry of arr) {
            let xStep = 70;
            let heightStep = 100;
            let width = 50;
            context.fillRect(xStep * counter, 350, width, -heightStep * dataSet.get(entry));
            if (typeof entry === "string") {
                context.fillText(entry, xStep * counter, 370);
            }
            counter++;
        }
    });


    return (
        <div className="divCanvas">
            <canvas ref={ref} width="2000" height="1000"/>
        </div>
    )

}