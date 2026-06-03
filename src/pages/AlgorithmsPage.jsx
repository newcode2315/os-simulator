import React, { useState } from 'react';
import { algorithmsData } from '../components/constants.jsx';

const AlgorithmsPage = () => {
  const [activeTab, setActiveTab] = useState('FIFO');

  const activeAlgo = algorithmsData.find(algo => algo.id === activeTab);

  return (
    <div className="bg-[#1F212D] text-white min-h-screen py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-center mb-12">
          Page Replacement Techniques
        </h1>

        {/* ## Tab Navigation ## */}
        <div className="flex justify-center border-b border-gray-700 mb-10">
          {algorithmsData.map(algo => (
            <button
              key={algo.id}
              onClick={() => setActiveTab(algo.id)}
              // Conditional styling for the active tab
              className={`py-3 px-4 sm:px-6 text-base sm:text-lg font-medium transition-colors duration-300 focus:outline-none 
                ${activeTab === algo.id
                  ? 'text-pink-600 border-b-2 border-pink-600'
                  : 'text-gray-400 hover:text-white'
                }`
              }
            >
              {algo.id}
            </button>
          ))}
        </div>

        {/* ## Content Area ## */}
        <div className="bg-[#2a2a3e] p-6 sm:p-8 rounded-2xl shadow-2xl shadow-black/30 w-[80vw]">
          {activeAlgo && (
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-100">{activeAlgo.name}</h2>
              <p className="text-gray-300 leading-relaxed mb-8">{activeAlgo.description}</p>
              
              {/* Strengths and Weaknesses displayed vertically */}
              <div className="space-y-8">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                  <h4 className="font-semibold text-xl text-green-400 mb-3">Strengths</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {activeAlgo.strengths.map((point, index) => (
                      <li key={`strength-${index}`}>{point}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/30">
                  <h4 className="font-semibold text-xl text-red-400 mb-3">Weaknesses</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {activeAlgo.weaknesses.map((point, index) => (
                      <li key={`weakness-${index}`}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Centered Image with spacing */}
              <div className="mt-10 flex justify-center">
                <img 
                  src={activeAlgo.exampleImage} 
                  alt={`${activeAlgo.id} Example Diagram`} 
                  className="rounded-lg shadow-lg max-w-[50vw] h-auto border-2 border-gray-700"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmsPage;

