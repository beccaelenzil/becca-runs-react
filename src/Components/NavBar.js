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
          </ButtonToolbar>
    );
 
};

export default NavBar
