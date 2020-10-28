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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <>
        <NavigationBar />
        <Layout>
          <Home />
          <About />
          <Skills />
          <Projects />
        </Layout>
        <Footer />
      </>
    )
  }
}

export default App
