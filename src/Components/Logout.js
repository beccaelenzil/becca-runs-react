import React from 'react';
import { 
  Redirect
} from 'react-router-dom';

import axios from 'axios';

const Logout = (props) => {
    axios.get('http://localhost:5000/logout', 
          {withCredentials: true })
          .then(() => {
            props.assignUser('') 
          })
        .catch((error)=>{
          console.log("ERROR! ", error)
        });
    console.log("clicked Logout!");
    return(<Redirect to="/home" />)
  };

export default Logout;