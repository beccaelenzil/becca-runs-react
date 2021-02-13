import React, {useEffect} from 'react';
import { 
  Redirect,
  useParams
} from 'react-router-dom';


const LoggedIn = (props) => {
    console.log("I'm logged in");
    const {user_id} = useParams()
    useEffect(()=>{props.assignUser(user_id)},[])
    return (<Redirect to="/about" />)
  };

export default LoggedIn