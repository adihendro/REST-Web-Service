import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddFav extends Component{
  addFav(newFav){
    axios.request({
      method:'POST',
      url:'https://rest-web-service.herokuapp.com/favourites',
      data: newFav
    }).then(response => {
    //   this.props.history.push('/');
    }).catch(err => console.log(err));
  }
  

  onSubmit(e){
    const newFav = {
      name: this.name.value,
      released: this.city.value,
      rating: this.address.value
    }
    console.log(this.name.value);
    this.addFav(newFav);
    e.preventDefault();
  }

  render(){
    return (
     <div>
        <br />
       <h1>Add Favourite</h1>
       <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" ref="name" />
          </div><br/>
          <div className="input-field">
            <label htmlFor="city">Release</label>
            <input type="text" name="release" ref="release" />
          </div><br/>
          <div className="input-field">
            <label htmlFor="address">Rating</label>
            <input type="text" name="rating" ref="rating" />
          </div><br/>
       <Link className="btn btn-warning" to="/favourites">Back</Link>
          <button className="btn btn-success">Save</button>
        </form>
      </div>
    )
  }
}

export default AddFav;