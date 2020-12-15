import React, { Fragment, useEffect, useState } from 'react';
// var axios = require("axios").default;

const ShowFav = () => {

    const [fav, setFav] = useState([]);

    const getFav = async () => {
        try {
            const response = await fetch("https://rest-web-service.herokuapp.com/favourites")
            const favData = await response.json();
            console.log(favData);
            setFav(favData);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=>{
        getFav();
    }, []);

    // console.log(fav);
    return (<Fragment>
        
        <table class="table table-hover">
        <thead>
        <tr>
            <th>Game ID</th>
            <th>Name</th>
            <th>Released</th>
            <th>Rating</th>
        </tr>
        </thead>
        <tbody>

        {fav.map(fav => (
            <tr>
                <td>{fav.gameid}</td>
                <td>{fav.name}</td>
                <td>{fav.released}</td>
                <td>{fav.rating}</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        ))}
        
        </tbody>
    </table>

  </Fragment>);
};


export default ShowFav;