import React, { Fragment } from 'react';
import './App.css';


//components
import Favourites from './components/Favourites';


function App() {
  return (
    <Fragment>
      <div className="container">
      <Favourites />

      </div>
    </Fragment>
  );
}

export default App;
