// import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './components/HomePage/HomePage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar />
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      <footer className="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
