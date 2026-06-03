// src/algorithms/lfu.js
export const simulateLFU = (pages, frameCount) => {
  const frames = Array(frameCount).fill(-1);
  const history = [];
  let hits = 0;
  let faults = 0;
  const frequencies = new Map(); // page -> frequency
  const usageOrder = new Map(); // page -> last used index

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
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
        // Find LFU page to evict
        let minFreq = Infinity;
        let lfuPages = [];
        
        frames.forEach(p => {
            const freq = frequencies.get(p) || 0;
            if (freq < minFreq) {
                minFreq = freq;
                lfuPages = [p];
            } else if (freq === minFreq) {
                lfuPages.push(p);
            }
        });

        // Tie-breaker: if multiple pages have the same lowest frequency, use LRU
        if (lfuPages.length > 1) {
            let earliestTime = Infinity;
            lfuPages.forEach(p => {
                if(usageOrder.get(p) < earliestTime) {
                    earliestTime = usageOrder.get(p);
                    evictedPage = p;
                }
            });
        } else {
            evictedPage = lfuPages[0];
        }
        
        const evictIndex = frames.indexOf(evictedPage);
        frames[evictIndex] = page;
      }
      frequencies.set(page, 1);
    }
    usageOrder.set(page, i); // Update usage time for LRU tie-breaking

    history.push({
      page,
      frames: [...frames],
      hit,
      evictedPage,
    });
  }

  return { history, hits, faults, name: 'Least Frequently Used (LFU)' };
};