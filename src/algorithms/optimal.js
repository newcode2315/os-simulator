// src/algorithms/optimal.js

export const simulateOptimal = (pages, frameCount) => {
  const frames = Array(frameCount).fill(-1);
  const history = [];
  let hits = 0;
  let faults = 0;

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    let hit = frames.includes(page);
    let evictedPage = null;

    if (hit) {
      hits++;
    } else {
      faults++;
      const emptyIndex = frames.indexOf(-1);
      if (emptyIndex !== -1) {
        // If there's an empty frame, use it
        frames[emptyIndex] = page;
      } else {
        // Frames are full, find the page to evict
        const futureUses = {};
        frames.forEach(framePage => {
          futureUses[framePage] = Infinity; // Assume it's not used again
          for (let j = i + 1; j < pages.length; j++) {
            if (pages[j] === framePage) {
              futureUses[framePage] = j; // Found its next use
              break;
            }
          }
        });

        // Find the page with the furthest future use
        evictedPage = Object.keys(futureUses).reduce((a, b) => futureUses[a] > futureUses[b] ? a : b);
        const evictIndex = frames.indexOf(Number(evictedPage));
        frames[evictIndex] = page;
      }
    }

    history.push({
      page,
      frames: [...frames],
      hit,
      evictedPage: evictedPage ? Number(evictedPage) : null,
    });
  }

  return { history, hits, faults, name: 'Optimal (OPT)' };
};