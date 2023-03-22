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
        <main>
          <Homepage />
          <FeaturesPage />
          <Solutions />
          <Pricing />
          <About />
        </main>
        <Footer />
        <FAQ />
      </Container>
  );
}

export default App;
