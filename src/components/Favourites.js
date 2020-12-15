import React, { Fragment, useEffect, useState } from 'react';
// import EditFav from "./EditFav";


const Favourites = () => {
    const [fav, setFav] = useState([]);

    //delete fav
    const deleteFav = async (gameid) => {
        try {
            const del = await fetch(`https://rest-web-service.herokuapp.com/favourites/${gameid}`,{
                method: "DELETE"
            });
            setFav(fav.filter(fav => fav.gameid !== gameid))
            // const favData = await response.json();
            // console.log(del);
        } catch (err) {
            console.error(err.message);
        }
    }

    const getFav = async () => {
        try {
            const response = await fetch("https://rest-web-service.herokuapp.com/favourites")
            const favData = await response.json();
            // console.log(favData);
            setFav(favData);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=>{
        getFav();
    }, []);

    // console.log(fav);

    return (
        <Fragment>
        <a href="https://rest-web-service.herokuapp.com/logout" className="btn btn-outline-danger">Log Out</a>
        <br />
        <h1>Favourite Video Games List</h1>
        <table class="table mt-5 text-center">
        <thead>
        <tr>
            <th>Name</th>
            <th>Released</th>
            <th>Rating</th>
            <th>EDIT</th>
            <th>DELETE</th>
        </tr>
        </thead>
        <tbody>

        {fav.map(fav => (
            <tr key={fav.gameid}>
                <td>{fav.name}</td>
                <td>{fav.released.substring(0,10)}</td>
                <td>{fav.rating}</td>
                <td><a href="https://rest-web-service.herokuapp.com/favourites/edit/" className="btn btn-warning">Edit</a></td>
                <td><button className="btn btn-danger" 
                onClick={() => deleteFav(fav.gameid)}>Delete</button></td>
            </tr>
        ))}
        
        </tbody>
    </table>

  </Fragment>);
};


export default Favourites;