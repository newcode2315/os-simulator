// src/algorithms/lru.js

export const simulateLRU = (pages, frameCount) => {
  const frames = Array(frameCount).fill(-1);
  const history = [];
  let hits = 0;
  let faults = 0;
  const recentlyUsed = []; // An array to track usage order, 0 is most recent

  for (const page of pages) {
    let hit = frames.includes(page);
    let evictedPage = null;

    if (hit) {
      hits++;
      // Move the hit page to the front of the recentlyUsed list
      recentlyUsed.splice(recentlyUsed.indexOf(page), 1);
      recentlyUsed.unshift(page);
    } else {
      faults++;
      const emptyIndex = frames.indexOf(-1);
      if (emptyIndex !== -1) {
        // Use an empty frame
        frames[emptyIndex] = page;
      } else {
        // Evict the least recently used page
        evictedPage = recentlyUsed.pop(); // Get page from the end of the list
        const evictIndex = frames.indexOf(evictedPage);
        frames[evictIndex] = page;
      }
      recentlyUsed.unshift(page); // Add new page to the front
    }

    history.push({
      page,
      frames: [...frames],
      hit,
      evictedPage,
    });
  }

  return { history, hits, faults, name: 'Least Recently Used (LRU)' };
};