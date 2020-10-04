import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello there!
        </header>
        <Nav />
        <br/>
        <h2 id="home">welcome</h2>
        <About />
        <Projects />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet laoreet augue, a cursus metus.
            Pellentesque scelerisque elementum sollicitudin. Fusce non bibendum diam. Phasellus vel magna quis augue
            consectetur auctor vel et tellus. Integer hendrerit efficitur sapien. Nulla vitae dictum est, sed lobortis mi.
            Donec molestie tincidunt nibh a cursus. Aenean tincidunt eros vel posuere elementum. Vivamus a ex massa.
            Nullam in egestas nulla. Vivamus non posuere leo. Maecenas et scelerisque metus. Cras quis rhoncus est,
            eu pretium ante. Nulla non tellus ut tellus euismod sodales.
          </p>
      </div>
    )
  }
}

export default App;
