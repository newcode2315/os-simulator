export const algorithmsData = [
  {
    id: 'FIFO',
    name: 'FIFO (First-In-First-Out)',
    description: `FIFO is the simplest page replacement algorithm. It treats the set of memory frames like a queue: the oldest loaded page (the one that entered memory first) is the first to be replaced when a new page needs to be loaded. This mirrors a line of people waiting: the first person in is the first person out.`,
    strengths: [
      'Extremely easy to implement and understand.',
      'Requires minimal bookkeeping (just maintain a simple queue of pages).',
      'Provides a good starting point for comparing with more advanced algorithms.',
    ],
    weaknesses: [
      'Often performs poorly in practice because it does not consider actual usage patterns.',
      'Suffers from Belady’s Anomaly: adding more memory frames can paradoxically lead to more page faults.',
      'Does not exploit temporal or spatial locality of reference.',
    ],
    exampleImage: '/fifo.jpg',
  },
  {
    id: 'Optimal',
    name: 'Optimal (OPT)',
    description: `The Optimal algorithm provides the best possible performance by replacing the page that will not be used for the longest period of time in the future. It is often used as a benchmark to measure the effectiveness of other algorithms.`,
    strengths: [
      'Guarantees the minimum possible number of page faults for a given reference string.',
      'Serves as a theoretical baseline for evaluating other algorithms.',
      'Demonstrates the "ideal" replacement policy.',
    ],
    weaknesses: [
      'Cannot be implemented in real operating systems because future page requests are unknown.',
      'Only useful in simulations, analysis, or for benchmarking other algorithms.',
      'Computationally expensive if naively implemented (requires scanning future requests).',
    ],
    exampleImage: '/OPR.jpg',
  },
  {
    id: 'LRU',
    name: 'LRU (Least Recently Used)',
    description: `LRU is a practical algorithm that replaces the page that has not been used for the longest time. It assumes that pages used recently are more likely to be used again (temporal locality).`,
    strengths: [
      'Provides much better performance than FIFO in most real workloads.',
      'Does not suffer from Belady’s Anomaly.',
      'Closely models actual program behavior (principle of locality).',
      'Widely used in caches and operating systems.',
    ],
    weaknesses: [
      'More complex to implement than FIFO (requires extra data structures).',
      'Pure LRU needs to track exact last access times or maintain a stack/linked list of pages.',
      'Implementations can be costly in terms of time and space overhead.',
    ],
    exampleImage: '/LRU.jpg',
  },
  {
    id: 'LFU',
    name: 'LFU (Least Frequently Used)',
    description: `LFU replaces the page that has been used the least number of times. It assumes that pages with low access frequency in the past are less likely to be needed in the future.`,
    strengths: [
      'Works well for workloads where frequently accessed pages continue to be useful.',
      'Exploits the principle of frequency locality (pages used often in the past will be used again).',
      'Often outperforms FIFO on stable access patterns.',
    ],
    weaknesses: [
      'Performance degrades when workload changes suddenly (e.g., phase changes in a program).',
      'Needs additional data structures to track frequency counts.',
      'May evict recently used but less frequent pages, which can hurt performance.',
      'Tie-breaking between equally frequent pages can be arbitrary and affect results.',
    ],
    exampleImage: '/LFU.jpg',
  },
  {
    id: 'MFU',
    name: 'MFU (Most Frequently Used)',
    description: `MFU takes the opposite approach of LFU: it replaces the page with the highest access count. It operates under the assumption that if a page has been used very frequently, it might have already served its purpose and is less likely to be needed again.`,
    strengths: [
      'Can be effective in rare workloads where frequently accessed pages quickly become irrelevant.',
      'Demonstrates an interesting contrast with LFU for educational purposes.',
    ],
    weaknesses: [
      'Rarely useful in real systems; often discards "hot" pages that are still needed.',
      'Performance is generally unstable and worse than LRU/LFU in practice.',
      'Requires overhead to maintain frequency counts, with little practical benefit.',
    ],
    exampleImage: '/MFU.jpg',
  },
];