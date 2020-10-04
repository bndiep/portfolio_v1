import React, { Component} from 'react';

class Nav extends Component {
    render() {
    return (
        <div className="Nav">
            <div className="nav">
                <a href="#home">home</a>
                <a href="#about">about me</a>
                <a href="#skills">skills</a>
                <a href="#projects">projects</a>
            </div>
        </div>
        )
    }
}

export default Nav;