import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import About from './pages/About';
import Seva from './pages/Seva';
import DailyRoutine from './pages/DailyRoutine';
import Ekanike from './pages/Ekanike';
import HowToReach from './pages/HowToReach';
import Utsava from './pages/Utsava';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/seva" element={<Seva />} />
          <Route path="/dailyRoutine" element={<DailyRoutine />} />
          <Route path="/eKanike" element={<Ekanike />} />
          <Route path="/howToReach" element={<HowToReach />} />
          <Route path="/utsava" element={<Utsava />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
