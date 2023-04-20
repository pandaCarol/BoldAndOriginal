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
import { FAQ } from './app/FAQ';
import { Footer } from './app/Footer';
import { MainPage } from './main';



function App() {
  return (
    <Container>
        <NavBar />
        <MainPage />
        <Footer />
    </Container>
  );
}

export default App;
