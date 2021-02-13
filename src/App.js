import React, {useState, useEffect} from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route,
  useParams,
  Redirect
} from 'react-router-dom';


import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

import './App.css';

const Home = () => {
  console.log("clicked Home!")
  return(<span>Home</span>);
};

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

// const HelloWorld = () => {
//   console.log("clicked Hello!")
//   axios.get("http://localhost:5000/")
//     .then((response) => {
//       console.log("I'm in Hello!")
//       console.log(response)
//     })
//     .catch((error) => {
//       console.log("There was an error", error)
//     })
//   return(<span>Hello World</span>);
// };

const About = (props) => {
  return(<span>Now showing information for {props.user_id}</span>);
};

const LoggedIn = (props) => {
  console.log("I'm logged in");
  const {user_id} = useParams()
  useEffect(()=>{props.assignUser(user_id)},[])
  return (<Redirect to="/about" />)
};

const App = () => {

  const [user_id, setUserId] = useState('');

  const path = user_id != '' ? "/logout" : "/login"
  const LogoutLogin = user_id != '' ? "Logout" : "Login"

  return(
  <Router>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Becca Runs</h1>
        <h2>
          {' '}
          <Switch>
            <Route path="/about">
              <About user_id={user_id}/>
            </Route>
            {/* <Route path="/helloworld">
              <HelloWorld />
            </Route> */}
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login" component={()=>{
              window.location.href = 'http://localhost:5000/login';
              return null;
            }}/>
            <Route path="/logout">
              <Logout assignUser={setUserId}/>
            </Route>
            <Route path="/loggedin/:user_id">
              <LoggedIn assignUser={setUserId}/>
            </Route>
          </Switch>
        </h2>
        <h2>
          {' '}
          <ButtonToolbar className="custom-btn-toolbar">

            <LinkContainer to={path}>
              <Button>{LogoutLogin}</Button>
            </LinkContainer>
            <LinkContainer to={`/about`}>
              <Button>About</Button>
            </LinkContainer>
            <LinkContainer to="/home">
              <Button>Home</Button>
            </LinkContainer>
            {/* <LinkContainer to="/helloworld">
              <Button>HelloWorld</Button>
            </LinkContainer>             */}
          </ButtonToolbar>
        </h2>
      </Jumbotron>
    </Container>
  </Router>
  );
};

export default App;
