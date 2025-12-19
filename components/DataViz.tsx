
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';
import { REGIONAL_RISK_DATA, PROTECTION_STATUS_DATA } from '../constants';

const DataViz: React.FC = () => {
  return (
    <section id="trends" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
           <h2 className="font-serif text-4xl text-gray-900 mb-6">Global Threats & Protection Status</h2>
           <p className="text-gray-600 text-lg font-light leading-relaxed max-w-3xl">
              The analysis highlights a dual crisis: the widespread depletion of groundwater in GDE-rich regions and the severe lack of legal protection mechanisms.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Chart 1: Regional Risk */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <h3 className="font-serif text-2xl text-gray-800">Groundwater Depletion</h3>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Regional Risk</span>
            </div>
            <div className="h-[350px] w-full bg-sand-50/50 rounded-2xl p-4 border border-sand-100">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={REGIONAL_RISK_DATA}
                  margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="region" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#4b5563', fontSize: 13, fontWeight: 500 }}
                    width={110}
                  />
                  <ReTooltip 
                    cursor={{ fill: '#f3f4f6' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="threatenedPercentage" name="% Depleting Areas" radius={[0, 4, 4, 0]} barSize={24}>
                    {REGIONAL_RISK_DATA.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.threatenedPercentage > 50 ? '#d4b679' : '#22c55e'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 font-light">
              <strong className="text-gray-900">Europe (90%)</strong> and <strong className="text-gray-900">Asia (75%)</strong> face extreme pressures, where most GDEs are located in basins with declining storage.
            </p>
          </div>

          {/* Chart 2: Protection Gap */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <h3 className="font-serif text-2xl text-gray-800">The Protection Gap</h3>
              <span className="text-xs text-gray-400 uppercase tracking-widest">Fig. 4 Analysis</span>
            </div>
            <div className="h-[350px] w-full bg-sand-50/50 rounded-2xl p-4 border border-sand-100 flex items-center justify-center relative">
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={PROTECTION_STATUS_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {PROTECTION_STATUS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                    ))}
                  </Pie>
                  <ReTooltip 
                     contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    iconType="circle"
                    formatter={(value, entry: any) => <span className="text-gray-600 text-sm ml-1">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
                <span className="text-5xl font-bold text-gray-900">79%</span>
                <span className="text-xs text-red-500 font-medium uppercase tracking-wider mt-1">Unprotected</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-light">
              Only <strong className="text-gray-900">21%</strong> of GDEs fall under some form of protection, with a mere <strong className="text-gray-900">2%</strong> covered by both protected areas and sustainable policy frameworks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DataViz;
