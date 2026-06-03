// src/pages/SimulatorPage.jsx

import React, { useState } from 'react';

// Import all your algorithm functions
import { simulateFIFO } from '../algorithms/fifo';
import { simulateOptimal } from '../algorithms/optimal';
import { simulateLRU } from '../algorithms/lru';
import { simulateLFU } from '../algorithms/lfu';
import { simulateMFU } from '../algorithms/mfu';

// Import the new components
import ResultsTable from '../components/ResultsTable';
import Summary from '../components/Summary';

const SimulatorPage = () => {
  const [frameCount, setFrameCount] = useState('4');
  const [pageSequence, setPageSequence] = useState('7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSimulate = (algoFn) => {
    // Robust input validation
    const frames = parseInt(frameCount);
    if (isNaN(frames) || frames <= 0 || frames > 10) {
      setError('Number of frames must be a positive integer (1-10).');
      return;
    }

    const pages = pageSequence.trim().split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
    if (pages.length === 0) {
      setError('Page sequence must contain valid numbers separated by spaces or commas.');
      return;
    }

    setError(''); // Clear previous errors
    const simulationResult = algoFn(pages, frames);
    setResult(simulationResult);
  };

  const handleReset = () => {
    setResult(null);
    setError('');
  };

  // Create a list of algorithms to generate buttons dynamically
  const algorithms = [
    { name: 'FIFO', func: simulateFIFO },
    { name: 'Optimal', func: simulateOptimal },
    { name: 'LRU', func: simulateLRU },
    { name: 'LFU', func: simulateLFU },
    { name: 'MFU', func: simulateMFU },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="bg-[#2a2a3e] p-6 md:p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Simulator</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 font-semibold">Number of Frames</label>
            <input type="number" min="1" value={frameCount} onChange={(e) => {
              setFrameCount(e.target.value);
              setResult(null);
            }} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Page Sequence (comma/space separated)</label>
            <input type="text" value={pageSequence} onChange={(e) => {
              setPageSequence(e.target.value);
              setResult(null);
            }} placeholder="e.g., 7 0 1 2 0 3" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </div>
        </div>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {algorithms.map(algo => (
            <button key={algo.name} onClick={() => handleSimulate(algo.func)} className="bg-pink-600 hover:bg-pink-700 px-5 py-2 rounded-md font-semibold transition-transform hover:scale-105">{algo.name}</button>
          ))}
          <button onClick={handleReset} className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-md font-semibold transition-transform hover:scale-105">Reset</button>
        </div>
      </div>

      {result && (
        <div className="mt-8 animate-fade-in mx-40">
          <h2 className="text-3xl font-bold text-center mb-4">{result.name}</h2>
          <ResultsTable history={result.history} frameCount={parseInt(frameCount)} />
          <Summary result={result} pageSequence={pageSequence} frameCount={frameCount} />
        </div>
      )}
    </div>
  );
};

export default SimulatorPage;
//7,0,1,2,0,3,0,4,2,3,0,3,1,2,0