import React, { Fragment, useState } from 'react';
var axios = require("axios").default;

const Favourites = () => {

    const [username, setFavourites] = useState("");
    const id = 463;
    const games = 884;


    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {id,username,games};
            console.log(JSON.stringify(body));

            axios.get('https://rest-video-games.herokuapp.com/favourites')
                // {
                //     "id": 5,
                //     "username": "nakl",
                //     "games": 235
                // })
                .then(res => {
                    console.log(res);
                });
            // console.log(response);
        } catch (err) {
            console.error(err.message);
        }
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