import React, { Component} from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    text-align: center;
    background-color: #0EAD69;
    color: white;
    font-size: 11px;
    width: 100%;
    padding: 3px 0px;
    margin-top: 20px;
`
class Footer extends Component {
    render() {
    return (
        <Styles>
            <footer>designed and built by Bach Diep && I hope you'll be "bach"!</footer>
        </Styles>
        )
    }
}

export default Footer