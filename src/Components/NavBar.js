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
import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';

const NavBar = (props) => {
    const renderAboutButton = (user_id) => {
        if (user_id === ''){
          return('');
        }else{
          return(
        <ButtonGroup className="mr-2" aria-label="Second group">
            <LinkContainer to={`/about`}>
                <Button>About</Button>
            </LinkContainer>
            <LinkContainer to={`/steps`}>
                <Button>Steps</Button>
            </LinkContainer>
        </ButtonGroup>
        
        );
        };
    };

    const renderPersonalButtons = (user_id) => {
        if (user_id === ''){
            return('');
          }else{
            return([
                <li class="nav-item">
                <a class="nav-link" href="/steps">Steps</a>
              </li>,
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>

            ]
          );
          };

    }

    return (
        <ButtonToolbar className="custom-btn-toolbar">
            <ButtonGroup className="mr-2" aria-label="First group">
                <LinkContainer to="/home">
                    <Button>Home</Button>
                </LinkContainer>
            </ButtonGroup>
            {renderAboutButton(props.user_id)}
            <ButtonGroup aria-label="Third group">
              <LinkContainer to={props.path}>
                <Button>{props.LogoutLogin}</Button>
              </LinkContainer>
            </ButtonGroup>
            

            <Dropdown as={ButtonGroup}>
            <Button variant="success">Moving Average Window</Button>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item href="#">3</Dropdown.Item>
              <Dropdown.Item href="#">7</Dropdown.Item>
              <Dropdown.Item href="#">10</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


           </ButtonToolbar>
    );
};
          /*<div>' '</div>,
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">Becca Runs</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                
              <li class="nav-item active">
                <a class="nav-link" href="/home">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              {renderPersonalButtons(props.user_id)}
              <li class="nav-item">
                <a class="nav-link" href={props.path}>{props.LogoutLogin}</a>
              </li>
            </ul>
     
          </div>
        </nav> }*/

export default NavBar
