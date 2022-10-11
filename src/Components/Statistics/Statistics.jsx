import React from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    id: 1,
    name: "React",
    logo: "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
    total: 8,
  },
  {
    id: 2,
    name: "JavaScript",
    logo: "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
    total: 9,
  },
  {
    id: 4,
    name: "CSS",
    logo: "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
    total: 8,
  },
  {
    id: 5,
    name: "Git",
    logo: "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
    total: 11,
  },
];

const Statistics = () => {
  return (
    <section className="p-5 m-2">
      <div className="staticsticDetails pb-5">
        <h1 className="text-center text-2xl font-bold">
          Our Total <span className="text-blue-500">Quize</span> Statistics
        </h1>
      </div>
      <div style={{ width: "100%", height: "85vh" }}>
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Statistics;
