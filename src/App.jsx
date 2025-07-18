import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieCatalog from './components/MovieCatalog';
import MovieDetail from './components/MovieDetail';
import RentalList from './components/RentalList';
import PurchaseList from './components/PurchaseList';
import Contactenos from './components/Contactenos';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>        
        <Route path="/" element={<MovieCatalog />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/rentals" element={<RentalList />} />
        <Route path="/purchases" element={<PurchaseList />} />
        <Route path="/contacto" element={<Contactenos />} />        
        <Route path="/abouts" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
