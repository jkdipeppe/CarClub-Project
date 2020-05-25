import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Main from './components/Main.js';
import Membership from './components/rows/Membership';
import Home from './components/rows/Home';
import FAQ from './components/rows/FAQ';
import TheCars from './components/rows/TheCars';
import Apply from './components/rows/Apply';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/Home" component={Home} />
        <Route path="/TheCars" component={TheCars} />
        <Route path="/Membership" component={Membership} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/Apply" component={Apply} />
      </Switch>
    </Router>
  );
}

export default App;
