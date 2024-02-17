import React from "react";
import { BsGraphUpArrow, BsBank2 } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6";

import { GrTransaction } from "react-icons/gr";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const data = [
    { name: "A", uv: 5030, pv: 4481, amt: 2400 },
    { name: "B", uv: 4450, pv: 2988, amt: 2210 },
    { name: "C", uv: 3450, pv: 6450, amt: 2290 },
    { name: "D", uv: 2350, pv: 7978, amt: 2000 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>FINANCIAL DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>SAVINGS</h3>
            <BsBank2 className="card_icon" />
          </div>
          <h1 className="card-money">
            $<span>3</span>00
          </h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>INVESTMENT</h3>
            <FaSackDollar className="card_icon" />
          </div>
          <h1 className="card-money">
            $<span>9</span>000
          </h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>FINANCIAL HEALTH</h3>
            <BsGraphUpArrow className="card_icon" />
          </div>
          <h1 className="card-money">
            +<span>55</span>%
          </h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>EXPENSES</h3>
            <GrTransaction className="card_icon" />
          </div>
          <h1 className="card-money">
            $<span>1</span>0000
          </h1>
        </div>
      </div>

      <div className="chart-container">
        <h2 className="chart-title">FINANCE CHART</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <h2 className="chart-title">FINANCE CHART</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;
