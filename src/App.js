import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


//components
import Home from './components/Home';
import Favourites from './components/Favourites';
import Favv from './components/Favv';


function App() {
  return (
    // <Fragment>
      <BrowserRouter>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/showfav" component={Favv} />
          {/* <div className="container"> */}
            
        </div>
      </BrowserRouter>
    // </Fragment>
  );
}

export default App;
