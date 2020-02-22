import React from 'react';
import './App.css';
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';
import Beers from './components/Beers'
import Beer from './components/Beer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer';



function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/beer/:id" component={Beer} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
    </div>
  );
}

export default App;
