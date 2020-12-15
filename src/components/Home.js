import React, { Fragment, useState } from 'react';
import google from './google.png';

const Home = () => {
    return (
        <Fragment>
        {/* <script src="https://apis.google.com/js/platform.js" async defer></script> */}
        <h1 className="text-center mt-5">This is homepage</h1>
        <a href="https://rest-web-service.herokuapp.com/login">
            <img src={google} alt="Login" width="186" height="42"></img>
        </a>
        {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
        
    </Fragment>
    )
}

export default Home;