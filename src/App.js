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
import { Leadform } from './app/LeadForm';
import { HiddenWrapper } from './components/hooks';



function App() {
  return (
    <HiddenWrapper>
      <Container>
          <NavBar />
          <MainPage />
          <Leadform />
          <Footer />
      </Container>
    </HiddenWrapper>
  );
}

export default App;
