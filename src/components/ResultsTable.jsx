import React from 'react';

const ResultsTable = ({ history, frameCount }) => {
  // Create an array for the table headers dynamically
  const headers = Array.from({ length: frameCount }, (_, i) => `Frame ${i + 1}`);

  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-gray-700 shadow-xl shadow-black/30">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center text-gray-200">
          <thead className="text-xs uppercase bg-[#111217] text-gray-300">
            <tr>
              <th scope="col" className="py-3 px-6 border-r border-gray-700">Page</th>
              {headers.map(header => (
                <th key={header} scope="col" className="py-3 px-6 border-r border-gray-700">{header}</th>
              ))}
              <th scope="col" className="py-3 px-6">Result</th>
            </tr>
          </thead>
          <tbody className="bg-[#2a2a3e]">
            {history.map((step, index) => {
              // Find the index of the frame that was just updated on a fault
              const changedFrameIndex = !step.hit 
                ? step.frames.findIndex((frame, idx) => {
                    const prevFrames = index > 0 ? history[index - 1].frames : Array(frameCount).fill(-1);
                    return frame !== prevFrames[idx] && frame === step.page;
                  })
                : -1;

              return (
                <tr key={index} className="border-b border-gray-700">
                  {/* Page Column */}
                  <td className="py-3 px-6 font-bold text-lg whitespace-nowrap bg-[#1a1a2e] border-r border-gray-700">
                    P{index + 1} ({step.page})
                  </td>

                  {/* Frame Columns */}
                  {step.frames.map((frame, fIndex) => {
                    const isNewlyInserted = fIndex === changedFrameIndex;
                    const isAccessedOnHit = step.hit && frame === step.page;

                    // Determine cell styling based on its state
                    let cellClass = 'py-3 px-6 font-mono text-base border-r border-gray-700';
                    if (isNewlyInserted) {
                      cellClass += ' bg-[#E03B56] text-white font-extrabold';
                    } else if (isAccessedOnHit) {
                      cellClass += ' bg-green-500 text-white font-extrabold';
                    }

                    return (
                      <td key={fIndex} className={cellClass}>
                        {frame === -1 ? '' : frame}
                      </td>
                    );
                  })}

                  {/* Result Column */}
                  <td className={`py-3 px-6 font-bold uppercase ${step.hit ? 'bg-green-500/80' : 'bg-[#E03B56]/80'}`}>
                    {step.hit ? 'HIT' : 'FAULT'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;

