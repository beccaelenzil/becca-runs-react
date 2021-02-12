import React, {useState, useEffect} from 'react';
import { 
  MemoryRouter, 
  Switch, 
  Route,
  useParams
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

const Logout = () => {
  
  console.log("clicked Logout!")
  return(<span>Logout</span>);
};

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

const About = () => {
  // const [userId, setUserId] = useState('Not Logged In')

  const {user_id} = useParams();
  // setUserId(user_id)
  // console.log(userId)
  return(<span>Now showing information for {user_id}</span>);
};

const Users = () => {
  console.log("clicked Users")
  
  return(<span>Users</span>);
};


// const Login = () => {
//   console.log("clicked Login")
//   return (<span>Login</span>);
// };


const App = () => {

  //const user_id = "random"

  const [user_id, setUserId] = useState('Not Logged In');

  useEffect(() => {
    axios.get('http://localhost:5000/current_user', 
    {withCredentials: true }) //sameSite=None
    .then((response) => {
      setUserId(response.data.name) 
    })
  .catch((error)=>{
    console.log("ERROR! ", error)
  })}, []);

  console.log(user_id)

  const logout = () => {
  axios.get('http://localhost:5000/logout', 
      {withCredentials: true })
      .then(() => {
        setUserId('') 
      })
    .catch((error)=>{
      console.log("ERROR! ", error)
    })};

  return(
  <MemoryRouter>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <h2>
          Current Page is: {' '}
          <Switch>
            <Route path="/about/:user_id">
              <About/>
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/helloworld">
              <HelloWorld />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login" component={()=>{
              window.location.href = 'http://localhost:5000/login';
              return null;
            }}/>
            <Route path="/logout">
              <Logout />
            </Route>
          </Switch>
        </h2>
        <h2>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/login">
              <Button>Logged in as {user_id}</Button>
            </LinkContainer>
            <LinkContainer to="/logout">
              <Button onClick={logout}>Logout</Button>
            </LinkContainer>
            <LinkContainer to={`/about/${user_id}`}>
              <Button>About</Button>
            </LinkContainer>
            <LinkContainer to="/home">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/users">
              <Button>Users</Button>
            </LinkContainer>
            <LinkContainer to="/helloworld">
              <Button>HelloWorld</Button>
            </LinkContainer>            

          </ButtonToolbar>
        </h2>
      </Jumbotron>
    </Container>
  </MemoryRouter>
  );
};

export default App;
