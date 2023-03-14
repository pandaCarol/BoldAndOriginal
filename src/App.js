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



function App() {
  return (
      <Container>
        <NavBar />
        <Homepage />
        <FeaturesPage />
      </Container>
  );
}

export default App;
