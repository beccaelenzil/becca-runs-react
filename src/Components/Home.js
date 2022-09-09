import { prodDependencies } from 'mathjs';
import React from 'react';

const Home = (props) => {

    console.log("clicked Home!")
    if (props.user_id === ''){
      return(<span>Home</span>);
    }else{
      return(<span>Now showing information for {props.user_id}</span>)
    }

  };

export default Home;
