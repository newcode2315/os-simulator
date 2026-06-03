// src/algorithms/mfu.js
export const simulateMFU = (pages, frameCount) => {
  const frames = Array(frameCount).fill(-1);
  const history = [];
  let hits = 0;
  let faults = 0;
  const frequencies = new Map(); // page -> frequency

  for (const page of pages) {
    let hit = frames.includes(page);
    let evictedPage = null;

    if (hit) {
      hits++;
      frequencies.set(page, frequencies.get(page) + 1);
    } else {
      faults++;
      const emptyIndex = frames.indexOf(-1);
      if (emptyIndex !== -1) {
        frames[emptyIndex] = page;
      } else {
        // Find MFU page to evict
        let maxFreq = -1;
        frames.forEach(p => {
          const freq = frequencies.get(p) || 0;
          if (freq > maxFreq) {
            maxFreq = freq;
            evictedPage = p;
          }
        });
        
        const evictIndex = frames.indexOf(evictedPage);
        frames[evictIndex] = page;
      }
      frequencies.set(page, 1);
    }

    history.push({
      page,
      frames: [...frames],
      hit,
      evictedPage,
    });
  }

  return { history, hits, faults, name: 'Most Frequently Used (MFU)' };
};