// src/App.jsx
import { Routes, Route, NavLink } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AlgorithmsPage from './pages/AlgorithmsPage';
import SimulatorPage from './pages/SimulatorPage';



function App() {
  // This function helps style the active navigation link
  const navLinkClasses = ({ isActive }) =>
    `py-2 px-4 rounded-md transition-colors text-gray-300 hover:bg-pink-600 ${isActive ? 'bg-pink-600 text-white' : ''}`;

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      <nav className="bg-[#2d234a] shadow-lg">
        <div className="container mx-auto px-2 flex justify-between items-center h-16 ">
          <div className='flex justify-center items-center gap-3'>
          <img src="/logo1.png" alt="" className='w-12 rounded-full' />
          <NavLink to="/" className="text-2xl font-bold">Page Replacement Algorithms</NavLink>
          </div>
          <div className="flex items-center gap-4">
            <NavLink to="/simulator" className={navLinkClasses}>Simulator</NavLink>
            <NavLink to="/algorithms" className={navLinkClasses}>Algorithms</NavLink>
          </div>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/algorithms" element={<AlgorithmsPage />} />
          <Route path="/simulator" element={<SimulatorPage />} />
        </Routes>
      </main>
      
    </div>
  );
}
export default App;