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



function App() {
  return (
      <Container>
        <NavBar />
        <Homepage />
      </Container>
  );
}

export default App;
