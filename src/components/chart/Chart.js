import React, { PureComponent } from 'react';
import "./Chart.css";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chart_data } from '../../data/Chart_data';

function Chart({title, aspect_ratio}) {
  const data = chart_data
  return (
    <div className='Chart'>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect_ratio}>
        <AreaChart  data={data}
          margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="Revenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="Expenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="Month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="Revenue" stroke="#8884d8" fillOpacity={1} fill="url(#Revenue)" />
          <Area type="monotone" dataKey="Expenses" stroke="#82ca9d" fillOpacity={1} fill="url(#Expenses)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart