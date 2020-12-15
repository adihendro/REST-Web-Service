import React, { Fragment } from 'react';
import './App.css';


//components
import Favourites from './components/Favourites';
import ShowFav from './components/ShowFav';


function App() {
  return (
    <Fragment>
      <div className="container">
        <Favourites />
        <ShowFav />
      </div>
    </Fragment>
  );
}

export default App;
