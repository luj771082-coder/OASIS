import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TREND_DATA } from '../constants';

const DataViz: React.FC = () => {
  return (
    <section id="trends" className="py-24 bg-sand-50 border-t border-sand-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Ecological Metrics</h2>
            <p className="text-gray-600 max-w-xl text-lg font-light">
              Visualizing the correlation between vegetation recovery (NDVI) and desertification reduction over the last 5 years.
            </p>
          </div>
          <div className="text-right hidden lg:block">
            <div className="text-4xl font-serif text-oasis-600 font-bold">+17%</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Vegetation Index Growth</div>
          </div>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-sand-200/50 border border-sand-100 h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={TREND_DATA}
              margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorVeg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorDesert" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4b679" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#d4b679" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }} 
                dy={10}
              />
              
              {/* Left Axis for Desertification Rate (Percentages usually 0-100) */}
              <YAxis 
                yAxisId="left"
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#d4b679', fontSize: 12, fontWeight: 500 }}
                label={{ value: 'Desertification (%)', angle: -90, position: 'insideLeft', fill: '#d4b679', fontSize: 10, dy: 50 }}
              />

              {/* Right Axis for NDVI (Decimals usually 0-1) */}
              <YAxis 
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#22c55e', fontSize: 12, fontWeight: 500 }}
                domain={[0.2, 0.6]} // Adjusted domain to highlight the trend
                label={{ value: 'Vegetation Index (NDVI)', angle: 90, position: 'insideRight', fill: '#22c55e', fontSize: 10, dy: -60 }}
              />

              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  borderRadius: '12px', 
                  border: 'none', 
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
                }}
              />
              <Legend verticalAlign="top" height={36} iconType="circle"/>
              
              <Area 
                yAxisId="right"
                type="monotone" 
                dataKey="vegetationIndex" 
                name="Vegetation Index (NDVI)"
                stroke="#22c55e" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorVeg)" 
              />
              <Area 
                yAxisId="left"
                type="monotone" 
                dataKey="desertificationRate" 
                name="Desertification Rate (%)"
                stroke="#d4b679" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorDesert)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default DataViz;