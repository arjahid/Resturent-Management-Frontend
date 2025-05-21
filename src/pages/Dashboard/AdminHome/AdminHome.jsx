import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxious from "../../../Hooks/useAxious";
import { FaBook, FaDollarSign, FaUser } from "react-icons/fa";
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const AdminHome = () => {
  const { user } = useAuth();
  const axiousSecure = useAxious();

  const { data: stats=[] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiousSecure.get("/admin-stats");
      return res.data;
    },
  });
  const {data:chartData=[]}=useQuery({
    queryKey:['orders-stats'],
    queryFn:async ()=>{
        const res=await axiousSecure.get('/order-stats')
        return res.data;
    }
  })
//   custom shape for the bar chart

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

// Add missing TriangleBar and colors definition above your component
const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#a4de6c'];

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
  );
};

  return (
    <div>
      <h2 className="text-2xl">
        <span>Hi ,Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaDollarSign className="text-4xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revineu</div>
          <div className="stat-value">$ {stats.revineu}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaUser className="text-3xl"></FaUser>?
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaBook className="text-3xl"></FaBook>
          </div>
          <div className="stat-title">MenuItems</div>
          <div className="stat-value">{stats.menuItem}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
         <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quntity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default AdminHome;
