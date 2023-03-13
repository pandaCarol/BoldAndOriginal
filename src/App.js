import './App.css';
import { Container } from './css/cssDefault';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { NavBar } from './app/NavBar';



function App() {
  return (
      <Container>
        <NavBar></NavBar>
      </Container>
  );
}

export default App;
