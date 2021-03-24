import React, { useEffect, useState } from "react";
import axios from "../axios-orders";
import Graph from "./Graph";
import ChooseDateArea from "./ChooseDateArea";
function Home() {
  const [data, setData] = useState([]);
  const [pairs, setPairs] = useState([]);
  let originalData = [];
  useEffect(() => {
    onSubmit();
  }, []);
  const onSubmit = async () => {
    try {
      const res = await axios.get();
      console.log(res.data);

      let ps = res.data.map((v) =>
        v.goal
          ? {
              goal_type: v.goal.goal_type,
              points_in: v.goal.points_in | 0,
              createdAt: v.createdAt,
            }
          : {
              goal_type: v.goal_type,
              points_in: v.points_in | 0,
              createdAt: v.createdAt,
            }
      );
      console.log(ps);
      setPairs(ps);

      calculateData(ps);
    } catch (error) {
      console.log(error);
    }
  };
  const calculateData = (ps) => {
    console.log(ps);
    let uniqueItems = [...new Set(ps.map((p) => p.goal_type))];
    let points = uniqueItems.map((g) =>
      ps.reduce(
        (tot, pair) =>
          g === pair.goal_type ? (tot = tot + pair.points_in) : tot,
        0
      )
    );
    let d = uniqueItems.map((x, i) => {
      return { x, points_in: points[i] };
    });
    console.log(d);
    setData(d);
  };

  const changeSelectedDate = (v) => {
    const day = new Date(v).getDate();
    const month = new Date(v).getMonth();
    const year = new Date(v).getFullYear();

    let x = pairs.filter(
      (d) =>
        new Date(d.createdAt.slice(0, 10)).getDate() === day &&
        new Date(d.createdAt.slice(0, 10)).getMonth() === month &&
        new Date(d.createdAt.slice(0, 10)).getFullYear() === year
    );

    calculateData(x);
  };

  return (
    <div
      style={{
        position: "absolute",
        height: " 100%",
        width: "100%",
        backgroundColor: "black",
        opacity: "0.9",
      }}
    >
      <div
        style={{
          marginLeft: "30%",
        }}
      >
        <ChooseDateArea changeDate={changeSelectedDate} />
        {data.length > 0 ? <Graph data={data} /> : null}
      </div>
    </div>
  );
}

export default Home;
