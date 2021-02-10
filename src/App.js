import React from 'react';
import { 
  MemoryRouter, 
  Switch, 
  Route,
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
  console.log("clicked About")
  axios.get("http://localhost:5000/about")
    .then((response) => {
      console.log("I'm in About!")
    })
    .catch((error) => {
      console.log("There was an error")
    })

  return(<span>About</span>)
};

const Users = () => {
  console.log("clicked Users")
  
  return(<span>Users</span>);
};

const Login = () => {
  console.log("clicked Login")
  return (<span>Login</span>);
};

const App = () => (
  <MemoryRouter>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <h2>
          Current Page is{' '}
          <Switch>
            <Route path="/about">
              <About />
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
            }}>
              {/* <Login /> */}
            </Route>
          </Switch>
        </h2>
        <h2>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/login">
              <Button>Login</Button>
            </LinkContainer>
            <LinkContainer to="/about">
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

export default App;
