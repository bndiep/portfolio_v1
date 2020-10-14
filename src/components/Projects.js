import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

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
`

class Projects extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { thumbnail1, thumbnail2, thumbnail3, thumbnail4 } = this.props
    return (
        <div>
            <h2 id="projects">projects</h2>
            <CardStyles>
                <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ thumbnail1 } />
                <Card.Body>
                    <Card.Title>PROJECT 1</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button className="github-button">GitHub</Button>
                    <Button className="demo">Demo</Button> 
                </Card.Body>
                </Card>

                <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ thumbnail2 } />
                <Card.Body>
                    <Card.Title>PROJECT 2</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button className="github-button">GitHub</Button>
                    <Button className="demo">Demo</Button>
                </Card.Body>
                </Card>

                <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ thumbnail3 } />
                <Card.Body>
                    <Card.Title>PROJECT 3</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button className="github-button">GitHub</Button>
                    <Button className="demo">Demo</Button>
                </Card.Body>
                </Card>

                <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ thumbnail4 } />
                <Card.Body>
                    <Card.Title>PROJECT 4</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button className="github-button">GitHub</Button>
                    <Button className="demo">Demo</Button>
                </Card.Body>
                </Card>
            </CardStyles>  
        </div>
        )
    }
}

export default Projects