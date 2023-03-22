import './App.css';
import { Container } from './css/cssDefault';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { NavBar } from './app/NavBar';
import { Homepage } from './app/Homepage';
import { FeaturesPage } from './app/featurespage';
import { Pricing } from './app/Pricing';
import { About } from './app/About';
import { FAQ } from './app/FAQ';



function App() {
  return (
      <Container>
        <NavBar />
        <main>
          <Homepage />
          <FeaturesPage />
          <Pricing />
          <About />
        </main>
        <FAQ />
      </Container>
  );
}

export default App;
