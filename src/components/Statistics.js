import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import "./styles.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Statistics = () => {
    const datas = useLoaderData().data;
    console.log(datas)
    const data = [
        {
            name: "eact",
            uv: 8,
            pv: 2400,
            amt: 2400
        },
        {
            name: "JavaScript",
            uv: 9,
            pv: 1398,
            amt: 2210
        },
        {
            name: "CSS",
            uv: 8,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Git",
            uv: 11,
            pv: 3908,
            amt: 2000
        },
    ];
    return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Statistics;