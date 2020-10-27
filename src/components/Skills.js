import React, { Component} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faGitAlt, faFigma, faJs, faReact, faSlack  } from '@fortawesome/free-brands-svg-icons'

const SkillStyle = styled.div `
    display: flex;
    flex-wrap: wrap;
    padding: 0px 20px;

    #frontend, #backend, #version-control, #virtual-space, #design {
        justify-content: center;
        flex: 1 1 25%;
        text-align: center;
    }

    .icons {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
    }
    
    ul {
        margin: 0px;
        padding: 0px;
        justify-content: center;
    }

    li {
        list-style: none;
        color: #EE4266;
        padding: 0px 10px;
    }

    p {
        font-size: 12px;
    }
`


class Skills extends Component {

    render() {
        let {illustrator, photoshop, postgresql, rubyOnRails, zoom } = this.props
        return(
            <div>
                <h2 id="skills">skills</h2>
                <SkillStyle>
                <div id="frontend">
                    <h4>frontend</h4>
                    <ul className="icons">
                        <li>
                            <FontAwesomeIcon icon={ faHtml5 }
                            size="3x" alt="HTML5 logo"/>
                            <p>HTML</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faCss3Alt } 
                            size="3x" alt="CSS3 logo"/>
                            <p>CSS</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faJs }
                            size="3x" alt="JavaScript logo"/>
                            <p>JavaScript</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faGem }
                            size="2x" alt="Ruby logo"/>
                            <p>Ruby</p>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={ faReact }
                            size="3x" alt="React logo"/>
                            <p>React</p>
                        </li>
                    </ul>
                </div>

                <div id="backend">
                    <h4>backend</h4>
                    <ul className="icons">
                        <li>
                            <img src={ rubyOnRails }
                            alt="Ruby on Rails logo"
                            height="45px" />
                            <p>Ruby on Rails</p>
                        </li>
                        <li>
                            <img src={ postgresql }
                            alt="PostgreSQL logo"
                            height="40px" />
                            <p>PostgreSQL</p>
                        </li>
                    </ul>
                </div>

                <div id="version-control">
                    <h4>version control</h4>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={ faGitAlt }
                            size="3x" alt="Git logo"/>
                            <p>Git</p>
                        </li>
                    </ul>
                </div>

                <div id="virtual-space">
                    <h4>virtual communication</h4>
                    <ul className="icons">
                        <li>
                            <FontAwesomeIcon icon={ faSlack }
                            size="3x" alt="Slack logo"/>
                            <p>Slack</p>
                        </li>
                        <li>
                            <img src={ zoom }
                            alt="Zoom Conferencing logo"
                            height="40px" />
                            <p>Zoom</p>
                        </li>
                    </ul>
                </div>

                <div id="design">
                    <h4>design</h4>
                    <ul className="icons">
                        <li>
                            <FontAwesomeIcon icon={ faFigma }
                            size="3x" alt="Figma logo"/>
                            <p>Figma</p>
                        </li>
                        <li>
                            <img src={ photoshop }
                            alt="Adobe PhotoShop logo"
                            height="40px" />
                            <p>Photoshop</p>
                        </li>
                        <li>
                            <img src={ illustrator }
                            alt="Adobe Illustrator logo"
                            height="40px" />
                            <p>Illustrator</p>
                        </li>
                    </ul>
                </div>    
            </SkillStyle>
            </div>  
        )
    }
}

export default Skills