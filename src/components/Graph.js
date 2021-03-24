import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Graph = ({ data }) => {
  //   static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  return data.length > 0 ? (
    <BarChart
      width={700}
      height={700}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="x" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="points_in" fill="#8884d8" />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  ) : null;
};
export default Graph;
