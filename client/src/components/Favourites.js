import React, { Fragment, useState } from 'react';

const Favourites = () => {

    const [id, setFavourites] = useState("");
    const username = 'hellloo';
    const games = 884;


    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {id,username,games};
            const response = await fetch("https://rest-video-games.herokuapp.com/favourites", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            console.log(body);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
    <Fragment>
        <h1 className="text-center mt-5">My fav</h1>
        <form className="d-flex mt-5">
            <input type="text" className="form-control" value={id} 
            onChange ={e => setFavourites(e.target.value)} />
            <button className="btn btn-success">Add</button>
        </form>
    </Fragment>
    )
};

export default Favourites;