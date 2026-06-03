// src/algorithms/fifo.js

/**
 * Simulates the First-In-First-Out (FIFO) page replacement algorithm.
 * @param {number[]} pages - The sequence of page references.
 * @param {number} frameCount - The number of available frames in memory.
 * @returns {object} An object containing the simulation history, stats, and name.
 */
export const simulateFIFO = (pages, frameCount) => {
  const frames = Array(frameCount).fill(-1); // -1 represents an empty frame
  const history = [];
  let hits = 0;
  let faults = 0;
  const queue = []; // A simple queue to track the order of page entry

  for (const page of pages) {
    let hit = frames.includes(page);
    let evictedPage = null;

    if (hit) {
      hits++;
    } else {
      faults++;
      if (queue.length === frameCount) {
        // Frames are full, need to evict the oldest page
        evictedPage = queue.shift(); // Get page from the front of the queue
        const evictIndex = frames.indexOf(evictedPage);
        frames[evictIndex] = page;
      } else {
        // There is an empty frame available
        const emptyIndex = frames.indexOf(-1);
        frames[emptyIndex] = page;
      }
      queue.push(page); // Add the new page to the back of the queue
    }

    history.push({
      page,
      frames: [...frames], // Create a copy of the frames array for the history
      hit,
      evictedPage,
    });
  }

  return { history, hits, faults, name: 'First-In-First-Out (FIFO)' };
};