import './App.css';
import React from 'react';
import { Container } from './css/cssDefault';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom';

import { NavBar } from './app/NavBar';
import { Homepage } from './app/Homepage';
import { FeaturesPage } from './app/Featurespage';
import { Pricing } from './app/Pricing';
import { About } from './app/About';
import { FAQ } from './app/FAQ';
import { Footer } from './app/Footer';
import { Solutions } from './app/Solutions';



function App() {
  return (
    <Container>
        <NavBar />
        <Routes >
          <Route path='BoldAndOriginal/' element={<Homepage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
    </Container>
  );
}

export default App;
