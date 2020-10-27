import React, { Component } from 'react';
import styled from 'styled-components'

const HomeStyles = styled.div`
    padding: 100px 0px;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 7vw;
        text-align: right;
        padding: 10px;
    }

    span {
        text-decoration-line: underline;
        text-decoration-style: wavy;
        color: #3BCEAC;
        &:hover {
            color: #EE4266;
        }
    }

    #headshot {
        width: 30%;
        height: auto;
        border: 5px solid black;
        outline: solid #EE4266; 
        box-shadow: 10px 10px #FFD23F;
        padding: 10px;
        display: block;
        margin: auto;
        }
    }
`
class Home extends Component {
    render() {
        return(
            <div id="home">
                <HomeStyles>
                    <div id="greeting">
                        <h2>WELCOME, FRIEND.</h2>
                        <h2>MY NAME IS <span className="name">BACH</span>.</h2>
                    </div>
                    <br />
                    <img id="headshot" src={ this.props.headshot } alt="3/4 portrait of Bach Diep"/>
                </HomeStyles>
            </div>
        )
    }
}

export default Home