import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import WallOfFame from './components/WallOfFame';
import './index.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <Navbar />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/wall-of-fame' element={<WallOfFame />} />
            {/* Define other routes here */}
          </Routes>
        </main>
        <Projects />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
