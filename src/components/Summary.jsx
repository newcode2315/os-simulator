// src/components/Summary.jsx

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// We need to register the components we use from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Summary = ({ result, frameCount, pageSequence }) => {
  const { hits, faults, name } = result;
  const totalPages = pageSequence.trim().split(/[\s,]+/).map(Number).filter(n => !isNaN(n)).length;

  const hitRatio = totalPages > 0 ? (hits / totalPages * 100).toFixed(2) : 0;
  const faultRatio = totalPages > 0 ? (faults / totalPages * 100).toFixed(2) : 0;
  
  const chartData = {
    labels: ['Page Hits', 'Page Faults'],
    datasets: [
      {
        data: [hits, faults],
        backgroundColor: ['#22c55e', '#D81B60'], // green-500, red-600
        borderColor: ['#2a2a3e', '#2a2a3e'],
        borderWidth: 2,
      },
    ],
  };
  
  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#e5e7eb', // Text color for the legend
        },
      },
    },
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#2a2a3e] p-8 rounded-lg shadow-xl">
      {/* Summary Details */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <div className="space-y-2 text-gray-300">
          <p><strong>Algorithm:</strong> {name}</p>
          <p><strong>Total Frames:</strong> {frameCount}</p>
          <p><strong>Total Pages Referenced:</strong> {totalPages}</p>
          <p><strong>Page Sequence:</strong> <span className="font-mono text-sm">{pageSequence}</span></p>
          <p className="text-[#22c55e]"><strong>Page Hits:</strong> {hits} ({hitRatio}%)</p>
          <p className="text-[#D81B60]"><strong>Page Faults:</strong> {faults} ({faultRatio}%)</p>
        </div>
      </div>
      
      {/* Pie Chart */}
      <div className="max-w-xs mx-auto">
        <h3 className="text-xl font-semibold text-center mb-4 ">Hit vs. Fault Comparison</h3>
        <Pie data={chartData} options={chartOptions}/>
      </div>
    </div>
  );
};

export default Summary;