import React from 'react';

function Details(props) { 
    return (
      <div> 
        City: {props.city.toUpperCase()}
        <br />
        Age: {props.age}
        <br />
        Phone:{props.phone}
        <br />
        Email: {props.email}
        <br />
        Password: {props.password.toUpperCase()}
        <br />
      </div>
    );
  }

export default Details;