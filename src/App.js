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



function App() {
  return (
      <Container>
        <NavBar />
        <main>
          <Homepage />
          <FeaturesPage />
          <Pricing />
        </main>
        
      </Container>
  );
}

export default App;