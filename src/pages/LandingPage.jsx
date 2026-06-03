// src/pages/LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// A reusable card component just for this page to keep our code clean
const InfoCard = ({ title, children }) => (
  <div className="bg-[#2a2a3e] p-6 rounded-lg border border-gray-700 hover:border-pink-500 transition-all duration-300 shadow-lg">
    <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{children}</p>
  </div>
);

const AlgorithmCard = ({ abbreviation, fullName }) => (
  <div className=" p-8 rounded-3xl shadow-xl shadow-black/30 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-pink-600 cursor-pointer">
    <h3 className="font-decorative text-7xl font-bold text-[#6a5acd] mb-2">{abbreviation}</h3>
    <p className="text-gray-500 font-medium">{fullName}</p>
  </div>
);

const LandingPage = () => {
  const algorithms = [
    { abbr: 'FCFS', name: 'First Come First Serve' },
    { abbr: 'OPR', name: 'Optimal Page Replacement' },
    { abbr: 'LRU', name: 'Least Recently Used' },
    { abbr: 'LFU', name: 'Least Frequently Used' },
    { abbr: 'MLU', name: 'Most Frequently Used' },
  ];
  return (
    <div className="container mx-auto px-12 py-12 md:py-20">
      
      {/* ## Hero Section ## */}
      <header className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
        
        {/* Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Visualize Page Replacement Algorithms
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            An interactive simulator designed to help you understand how different OS paging algorithms work. See FIFO, Optimal, LRU, and more in action, step by step.
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            When a page fault occurs, the required page has to be brought from the secondary memory. If all the frames of main memory are already occupied, then a page has to be replaced. The page replacement algorithm decides which memory page is to be replaced.
          </p>
          <Link
            to="/simulator"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            Go to Simulator →
          </Link>
        </div>

        {/* Image Placeholder */}
        <div className="md:w-2/5 flex justify-center">
            
          <div className="w-[390px] h-[390px] bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center text-gray-500 p-2">
             <img src="/pageReplacement1.png" alt="" />
          </div>
        </div>
      </header>


      {/* ## Informational Cards Section ## */}
      <main className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoCard title="What is a Page?">
          The logical address space of a process is divided into fixed-size blocks called pages. It's the fundamental unit of virtual memory.
        </InfoCard>
        <InfoCard title="What is a Frame?">
          Physical memory (RAM) is divided into fixed-size blocks called frames. Each frame is designed to hold one page of data.
        </InfoCard>
        <InfoCard title="What is Paging?">
          A memory management technique that allows a process's physical address space to be non-contiguous, solving fragmentation issues.
        </InfoCard>
        <InfoCard title="What is a Page Fault?">
          An interrupt that occurs when a program tries to access a page that is not currently in physical memory, requiring the OS to load it.
        </InfoCard>
      </main>

      {/* ## Algorithms Cards Section ## */}
      <div className="container mx-auto text-center  mt-24 flex flex-col gap-12 items-center">
          
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-16">
            The Page Replacement Algorithms
          </h2>

          {/* Algorithm Cards Grid */}
          {/* We map over the algorithms array to render each card dynamically. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {algorithms.map((algo) => (
              <AlgorithmCard key={algo.abbr} abbreviation={algo.abbr} fullName={algo.name} />
            ))}
          </div>

          {/* "Learn More" Button */}
          <Link
            to="/algorithms"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            LEARN MORE →
          </Link>

        </div>

    </div>
  );
};

export default LandingPage;
