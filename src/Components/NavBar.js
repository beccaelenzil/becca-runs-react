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
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const NavBar = (props) => {
  const makeStepsDropdown = () => {
      return(
      <Dropdown as={ButtonGroup} onSelect={handleSelect}>
        <LinkContainer to={`/steps`}>
                <Button>Steps</Button>
            </LinkContainer>

        <Dropdown.Toggle id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item eventKey="3" val>3 days</Dropdown.Item>
          <Dropdown.Item eventKey="7">1 week</Dropdown.Item>
          <Dropdown.Item eventKey="10">10 days</Dropdown.Item>
          <Dropdown.Item eventKey="14">2 weeks</Dropdown.Item>
          <Dropdown.Item eventKey="21">3 weeks</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      )
    }

    const renderPersonalButtons = (user_id) => {
        if (user_id === ''){
          return(
            <ButtonGroup className="mr-2" aria-label="First group">
                <LinkContainer to="/home">
                    <Button>Home</Button>
                </LinkContainer>
            </ButtonGroup>
          );
        }else{
          return(
            
        <ButtonGroup className="mr-2" aria-label="Second group">
            <LinkContainer to={`/home`}>
                <Button>{user_id}'s Home</Button>
            </LinkContainer>
            {makeStepsDropdown()}
        </ButtonGroup> 
        );
        };
    };

    const handleSelect = (e) => {
      props.setWindow(e)
    }

    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ButtonToolbar className="custom-btn-toolbar">
          <a class="navbar-brand" href="#">FitBit Web App by Becca</a>    
            {/* <ButtonGroup className="mr-2" aria-label="First group">
                <LinkContainer to="/home">
                    <Button>{props.user_id}'s Home</Button>
                </LinkContainer>
            </ButtonGroup> */}
            {renderPersonalButtons(props.user_id)}
            <ButtonGroup aria-label="Third group">
              <LinkContainer to={props.path}>
                <Button>{props.LogoutLogin}</Button>
              </LinkContainer>
            </ButtonGroup>
            {/* <div>Hello {props.user_id}!</div> */}
        </ButtonToolbar>
        </nav>
    );
};
        
export default NavBar
