import React, {useState, useEffect} from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route,
} from 'react-router-dom';


import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

import './App.css';
import Home from './Components/Home'
import Steps from './Components/Steps'
import About from './Components/About'
import LoggedIn from './Components/LoggedIn'
import Logout from './Components/Logout'
import NavBar from './Components/NavBar'



const App = () => {

  const [user_id, setUserId] = useState('');
  const [stepData, setStepData] = useState([{x: 1, y: 1}]);
  const [windowAverage, setWindowAgerage] = useState(10);

  const path = user_id != '' ? "/logout" : "/login"
  const LogoutLogin = user_id != '' ? "Logout" : "Login"

  const months = [3]
  const random = Math.floor(Math.random() * months.length);
  const month = months[random]

  useEffect(() => {
    axios.get(`http://localhost:5000/steps/${month}`, 
          {withCredentials: true })
          .then((response) => {
            const data = response.data
            console.log("DATA: ", data)
            setStepData(data)
          })
        .catch((error)=>{
          console.log("ERROR! ", error)
        })
      }, []);

  console.log(user_id)

  return(
  <Router>
    <Container className="p-3">
      <Jumbotron>
        <NavBar user_id={user_id} LogoutLogin={LogoutLogin} path={path}/>
        <h1 className="header">Becca Runs</h1>
        <h2>
          {' '}
          <Switch>
            <Route path="/about">
              <About user_id={user_id}/>
            </Route>
            <Route path="/steps">
              <Steps stepData={stepData} window={windowAverage}/>
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
        </h2>
      </Jumbotron>
    </Container>
  </Router>
  );
};

export default App;


{/* <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */}