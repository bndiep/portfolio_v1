import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Layout from './components/Layout'
import Footer from './components/Footer'

import headshot from './assets/profilephoto_temp.jpg'
import thumbnail1 from './assets/react-here.png'
import thumbnail2 from './assets/tic-tac-toe.png'
import thumbnail3 from './assets/pig-latin.png'
import thumbnail4 from './assets/rails-blog.png'
import robot from './assets/robot.png'

import illustrator from './assets/illustrator.svg'
import photoshop from './assets/photoshop.svg'
import postgresql from './assets/postgresql.svg'
import rubyOnRails from './assets/ruby-on-rails.svg'
import zoom from './assets/zoom.svg'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headshot: headshot,
      thumbnail1: thumbnail1,
      thumbnail2: thumbnail2,
      thumbnail3: thumbnail3,
      thumbnail4: thumbnail4,
      robot: robot,
      illustrator: illustrator,
      photoshop: photoshop,
      postgresql: postgresql,
      rubyOnRails: rubyOnRails,
      zoom: zoom
    }
  }
  render() {
    let { headshot, robot, illustrator, photoshop, postgresql, rubyOnRails, zoom } = this.state
    return (
      <>
        <NavigationBar 
          robot={ robot }
        />
        <Layout>
          <Home
            headshot={ headshot }
          />
          <About
          />
          <Skills
            illustrator={ illustrator }
            photoshop={ photoshop }
            postgresql={ postgresql }
            rubyOnRails={ rubyOnRails }
            zoom={ zoom }
          />
          <Projects
            thumbnail1={ thumbnail1 }
            thumbnail2={ thumbnail2 }
            thumbnail3={ thumbnail3 }
            thumbnail4={ thumbnail4 }
          />
          
        </Layout>
        <Footer />
      </>
    )
  }
}

export default App
