import React, { Component} from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faTimes } from '@fortawesome/free-solid-svg-icons'
const Styles = styled.div`
    .navbar {
        background-color: #FFD23F;
        border: 4px solid black;
        box-shadow: 0px 4px 2px -2px #C1C1C1;
        width: 100%;
        z-index: 9999;
        position: fixed;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white;
        &:focus {
            color: #0EAD69;
        }
    }

    .navbar toggle {
        border: red;
    }

    .menu {
        color: white;

        &:active {
            color: #0EAD69;
        }
    }
`;

class NavigationBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
    return (
        <Styles>
            <Navbar collapseOnSelect expand="lg" id="navbar">
                <Navbar.Brand a href="/">
                    <img src={ this.props.robot } height="40px" alt="robot logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span>
                        <FontAwesomeIcon className="menu" icon={ faHamburger } alt="hamburger icon"/>
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span>
                            <FontAwesomeIcon icon={ faTimes } />
                        </span>
                    </Navbar.Toggle> */}
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link a href="#home">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link a href="#about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link a href="#skills">Skills</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link a href="#projects">Projects</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
        )
    }
}

export default NavigationBar