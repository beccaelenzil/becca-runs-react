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
  const [stepData, setStepData] = useState
  (
    [
    {x: 1, y: 8},
    {x: 2, y: 5},
    {x: 3, y: 4},
    {x: 4, y: 9},
    {x: 5, y: 2},
    {x: 6, y: 3},
    {x: 7, y: 2},
    {x: 8, y: 9},
    ]
  );
  const [windowAverage, setWindowAverage] = useState(10);

  const path = user_id != '' ? "/logout" : "/login"
  const LogoutLogin = user_id != '' ? "Logout" : "Login"

  const months = [3]
  const random = Math.floor(Math.random() * months.length);
  const month = months[random]

  useEffect(() => {
    axios.get(`http://localhost:5000/steps`, 
          {withCredentials: true })
          .then((response) => {
            const data = response.data
            //console.log("DATA: ", data)
            setStepData(data)
          })
        .catch((error)=>{
          console.log("ERROR! ", error)
        })
      }, []);

  useEffect(() => {
    axios.get(`http://localhost:5000/current_user`, 
          {withCredentials: true })
          .then((response) => {
            const data = response.data
            //console.log("DATA: ", data)
            setUserId(data["name"])
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
        <NavBar 
          user_id={user_id} 
          LogoutLogin={LogoutLogin} 
          path={path} 
          setWindow={setWindowAverage}
        />
        <h1 className="header">Becca Runs</h1>
        <h2>
          {' '}
          <Switch>
            <Route path="/about">
              <About user_id={user_id}/>
            </Route>
            <Route path="/steps">
              <Steps user_id={user_id} stepData={stepData} window={windowAverage}/>
            </Route>
            {/* <Route path="/helloworld">
              <HelloWorld />
            </Route> */}
            <Route path="/home">
              <Home user_id={user_id}/>
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
