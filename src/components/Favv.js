import React, { Fragment, useState } from 'react';
// var axios = require("axios").default;
// const cors = require('cors');

const Favourites = () => {

    const [username, setFavourites] = useState("");
    const id = 53;
    const games = 11;


    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = {id,username,games};
            const response = await fetch("https://rest-web-service.herokuapp.com/favourites", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
        // axios.post('https://rest-web-service.herokuapp.com/favourites',{
        //     id: id,
        //     username: username,
        //     games: games
        // })
        // .then(res => {
        //     console.log(res);
        //     console.log(id,username,games);
        // }, (err) => {
        //     console.error(err.message);
        // });

        window.location = '/';
    }

    
    return (
        <Fragment>
        <h1 className="text-center mt-5">My fav</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={username} 
            onChange ={e => setFavourites(e.target.value)} />
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
    )

};

export default Favourites;