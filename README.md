# Page Replacement Algorithm Simulator 🧠

Interactive web application for visualizing page replacement algorithms used in operating systems.

This simulator demonstrates how algorithms such as **FIFO**, **Optimal**, **LRU**, **LFU**, and **MFU** manage memory frames over time with visual step-by-step output.

---

## ✨ Features

* Simulates 5 page replacement algorithms: **FIFO**, **Optimal**, **LRU**, **LFU**, and **MFU**
* Custom page reference sequence input
* Configurable number of memory frames
* Step-by-step visualization of memory frame state
* Hit/fault statistics and ratio summary
* Interactive chart for hit vs. fault comparison
* Responsive UI for desktop and mobile
* Includes a sample `cpp_Implementation.cpp` file for algorithm reference

---

## 🛠️ Tech Stack

* Frontend: React, Vite
* Styling: Tailwind CSS
* Routing: React Router DOM
* Charting: Chart.js + react-chartjs-2
* Language: JavaScript

---

## ⚙️ Local Setup

### Prerequisites

* Node.js 16 or newer
* npm

### Install and run

```sh
cd c:\Users\ankit\Downloads\os-simulator\os-simulator-main
npm install
npm run dev
```

Open the URL shown in the terminal, typically `http://localhost:5173/`.

### Build for production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

---

## 🚀 How to Use

1. Open the **Simulator** page.
2. Enter the desired **Number of Frames**.
3. Enter a **Page Sequence** using spaces or commas.
4. Select an algorithm button to run the simulation.
5. Review the memory state table, summary metrics, and chart output.

---

## 📄 License

This project is available under the MIT License.
