# Page Replacement Algorithm Simulator 🧠

An interactive web application designed to help students and enthusiasts visualize and understand various page replacement algorithms used in operating systems. This tool provides a clear, step-by-step simulation of how algorithms like FIFO, LRU, Optimal, and others manage memory frames.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📸 Screenshot

![](/public/ss1.png)
![](/public/ss2.png)
![](/public/ss3.png)
![](/public/ss4.png)
![](/public/ss5.png)
![](/public/ss6.png)


---

## ✨ Features

* **Algorithm Simulation**: Simulates 5 key algorithms: FIFO, Optimal, LRU, LFU, and MFU.
* **Customizable Inputs**: Allows users to set the number of memory frames and a custom page reference string.
* **Step-by-Step Visualization**: Displays a clear, color-coded table showing the state of memory frames at each step.
* **Detailed Summary**: Provides aggregate statistics including hit/fault counts and hit/fault ratios.
* **Interactive Chart**: Includes a pie chart for a quick visual analysis of hits vs. faults.
* **Responsive Design**: A clean and modern UI that works on desktops, tablets, and mobile devices.
* **Educational Content**: Features dedicated pages explaining the theory, strengths, and weaknesses of each algorithm.
* **C++ Implementation**: I have also added a file "cpp_implementation.cpp" in the project code base to get the understanding of these Algorithms in C++ as well.

---

## 🛠️ Tech Stack

* **Frontend**: [React.js](https://reactjs.org/), [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Routing**: [React Router DOM](https://reactrouter.com/)
* **Charting**: [Chart.js](https://www.chartjs.org/) with [react-chartjs-2](https://react-chartjs-2.js.org/)
* **Deployment**: Vercel
* **Algorithms Implementation**: C++, Javascript

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 16 or higher) and npm installed on your machine.



## usage How to Use

1.  Navigate to the **Simulator** page.
2.  Enter the desired **Number of Frames**.
3.  Enter the **Page Sequence** using spaces or commas as separators (e.g., `7 0 1 2 0 3`).
4.  Click on one of the algorithm buttons (e.g., `FIFO`, `LRU`) to run the simulation.
5.  The results, including the step-by-step table and summary chart, will appear below.
6.  Click **Reset** to clear the results and try new inputs.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
