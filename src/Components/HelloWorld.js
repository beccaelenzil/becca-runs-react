import React from 'react';
import { 
  Redirect
} from 'react-router-dom';

import axios from 'axios';

const HelloWorld = () => {
  console.log("clicked Hello!")
  axios.get("http://localhost:5000/")
    .then((response) => {
      console.log("I'm in Hello!")
      console.log(response)
    })
    .catch((error) => {
      console.log("There was an error", error)
    })
  return(<span>Hello World</span>);
};

export default HelloWorld;