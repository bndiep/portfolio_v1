import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

import thumbnail1 from '../assets/react-here.png'
import thumbnail2 from '../assets/tic-tac-toe.png'
import thumbnail3 from '../assets/pig-latin.png'
import thumbnail4 from '../assets/rails-blog.png'

const CardStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card-body {
        padding: 5px;
    }
    .card {
        margin: 10px;
        border: 5px solid black;
        border-radius: 20px;
        box-shadow: 8px 8px #FFD23F;
    }

    .card img {
        border-radius: 20px 20px 0px 0px;
        padding: 5px;
    }

    .github-button {
        border: none;
        border-radius: 30px;
        background-color: #EE4266;
        color: #fff;
        float: left;
    }

    .demo {
        border: none;
        border-radius: 30px;
        background-color: black;
        color: #fff;
        float: right;
    }

    span {
        font-style: italic;
    }
`

class Projects extends Component {
    render() {
    return (
        <div>
            <h2 id="projects">projects</h2>
            <CardStyles>
                <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ thumbnail1 } alt="Artist E-40 displayed in a React application"/>
                <Card.Body>
                    <Card.Title>React Here, Tryna Function</Card.Title>
                    <Card.Text>
                        Created using React given a time frame of a day.
                        An homage to E-40's song <span>Function</span>, this party app allows the user to input their budget and number of guests to give them a list of typical party items they will need to purchase. Go over budget, and your guests will have to pitch in.
                    </Card.Text>
                    <Button
                        className="github-button"
                        a href="https://github.com/bndiep/party-app"
                        target="_blank">
                        GitHub
                        </Button>
                    <Button
                        className="demo"
                        a href="https://react-here-tryna-function-app.netlify.app"
                        target="blank">
                        Demo
                    </Button> 
                </Card.Body>
                </Card>

                <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ thumbnail2 } alt="Colorful tic-tac-toe board"/>
                <Card.Body>
                    <Card.Title>Tic-Tac-Toe</Card.Title>
                    <Card.Text>
                        Created in React. A simple implementation of Tic-Tac-Toe intended to be played by two users. The app will display the current player to keep track of the user's turns. There are three possible outcomes: X wins, O wins, or a cats game.
                    </Card.Text>
                    <Button
                        className="github-button"
                        a href="https://github.com/bndiep/tic-tac-toe-app"
                        target="_blank">
                        GitHub
                    </Button>
                    <Button
                        className="demo"
                        a href="https://tictactoe-app.netlify.app"
                        target="_blank">
                        Demo
                    </Button>
                </Card.Body>
                </Card>

                <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ thumbnail3 } alt="Words that ready to be translated into Pig Latin"/>
                <Card.Body>
                    <Card.Title>Pig Latin</Card.Title>
                    <Card.Text>
                        Created in React. An app that allows the user to convert their English words into Pig Latin. Has the ability to translate words starting with 'qu' and words in which 'y' acts a vowel. Maybe you can use this app when sending secret messages!
                    </Card.Text>
                    <Button
                        className="github-button"
                        a href="https://github.com/bndiep/pig-latin-app"
                        target="_blank">
                        GitHub
                    </Button>
                    <Button
                        className="demo"
                        a href="https://react-pig-latin-app.netlify.app"
                        target="_blank">
                        Demo
                    </Button>
                </Card.Body>
                </Card>

                <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ thumbnail4 } alt="Front page of a blog that contains posts"/>
                <Card.Body>
                    <Card.Title>Blog App</Card.Title>
                    <Card.Text>
                    Created using Ruby on Rails. A simple blog app that demonstrates RESTful routes. The user is able to create, view, edit, and delete a blog post. Strong params exist to ensure the user includes all fields in their blog post submission.
                    </Card.Text>
                    <Button
                        className="github-button"
                        a href="https://github.com/bndiep/blog-app"
                        target="_blank">
                        GitHub
                    </Button>
                </Card.Body>
                </Card>
            </CardStyles>  
        </div>
        )
    }
}

export default Projects