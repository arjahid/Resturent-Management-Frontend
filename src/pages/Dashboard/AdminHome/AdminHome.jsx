import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxious from "../../../Hooks/useAxious";
import { FaBook, FaDollarSign, FaUser } from "react-icons/fa";
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

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

  // Example pie chart data (replace with your actual data as needed)
  const pieData = chartData.map(item => ({
    name: item.category,
    value: item.quntity, // or item.quantity if that's the correct key
  }));

  // Custom label for PieChart
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {pieData[index]?.name} ({`${(percent * 100).toFixed(0)}%`})
      </text>
    );
  };

  return (
    <div className="px-2 sm:px-4 md:px-8">
      <h2 className="text-2xl">
        <span>Hi ,Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-0 w-full my-6">
  <div className="stat flex-1 min-w-[220px]">
    <div className="stat-figure text-secondary">
      <FaDollarSign className="text-4xl" />
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">$ {stats.revineu}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  <div className="stat flex-1 min-w-[220px]">
    <div className="stat-figure text-secondary">
      <FaUser className="text-3xl" />
    </div>
    <div className="stat-title">Users</div>
    <div className="stat-value">{stats.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  <div className="stat flex-1 min-w-[220px]">
    <div className="stat-figure text-secondary">
      <FaBook className="text-3xl" />
    </div>
    <div className="stat-title">MenuItems</div>
    <div className="stat-value">{stats.menuItem}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  <div className="stat flex-1 min-w-[220px]">
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
      <div className="flex flex-col gap-8 mt-8 md:flex-row md:gap-6">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                left: 0,
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
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={90}
                innerRadius={50}
                paddingAngle={3}
                fill="#8884d8"
                dataKey="value"
                stroke="#fff"
                strokeWidth={2}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-pie-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "#22223b",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "14px",
                }}
                itemStyle={{ color: "#fff" }}
              />
              <Legend
                verticalAlign="bottom"
                iconType="circle"
                iconSize={14}
                wrapperStyle={{
                  paddingTop: "12px",
                  fontSize: "15px",
                  color: "#22223b",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminHome;
