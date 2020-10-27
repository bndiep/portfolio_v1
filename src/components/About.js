import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faTwitter, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const AboutStyles = styled.div`
    span {
            font-style: italic;
            font-weight: bold;
        }

    .contact-links {
        display: flex;
        flex-wrap: flex;
        justify-content: center;
        }
    }

    .contact, .resume {
        margin: 0px 5px;
        background-color: #0EAD69;
        border: none;
        border-radius: 50px;
        &:hover{
            background-color: #FFD23F;
            opacity: 80%
        }
    }

    .copy {
        font-size: 10px;
    }

    .linkedin {
        margin: 0px 5px;
        background-color: #EE4266;
        border: none;
        border-radius: 100%;
        
    }

    .twitter {
        margin: 0px 5px;
        padding: 5px 10.5px;
        background-color: #1DA1F2;
        border: none;
        border-radius: 100%;
    }

    .github-icon {
        margin: 0px 5px;
        padding: 5px 11px;
        background-color: #540D6E;
        border: none;
        border-radius: 100%
    }
`

class About extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        return (
            <div id="about">
                <AboutStyles>
                    <h2>who am i?</h2>
                    <div className="blurb">
                        <p>
                        "Bach"? The <span>composer</span>? The cluck of a <span>chicken</span>? Ahh, maybe the <span>terminator’s</span> signature phrase?
                        </p>
                        <p>
                        Nope, I'm just your everyday human being who goes by Bạch, or ‘'Bot' in close circles. I am a web developer based in San Diego, CA with a fascination for tech, art, and how those two concepts bridge connections between people. Web development is the culmination of those two very concepts: it’s the challenge of making a digital product <span>tangible</span>, and adding cool colors and effects to the user experience is the artistic flair.
                        </p>
                    </div>
                    
                    <div className="contact-links">
                        <Button className="contact">Contact Me</Button>
                        <Button
                            className="linkedin"
                            a href="https://www.linkedin.com/in/bachdiep"
                            target="_blank">
                        <FontAwesomeIcon
                            icon={ faLinkedinIn }
                            size="1x"
                            alt="linkedin logo" />
                        </Button>

                        <Button
                            className="twitter"
                            a href="https://www.twitter.com/itsabach"
                            target="_blank">
                        <FontAwesomeIcon
                            icon={ faTwitter }
                            size="1x"
                            alt="twitter logo" />
                        </Button>

                        <Button
                            className="github-icon"
                            a href="https://www.github.com/bndiep"
                            target="_blank">
                        <FontAwesomeIcon
                            icon={ faGithubAlt }
                            size="1.5x"
                            alt="github logo" />
                        </Button>

                        <Button 
                            className="resume"
                            a href=""
                            target="_blank">
                            Resume
                        </Button>
                    </div>
                </AboutStyles>
            </div>
        )
    }
}

export default About