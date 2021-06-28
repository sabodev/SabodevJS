import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import AboutUs from './components/pages/AboutUs';
import Subscribe from './components/pages/Subscribe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/subscribe' component={Subscribe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
