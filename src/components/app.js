import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Scene from './scene'

// Code-splitting is automated for routes
import Home from '../routes/home'
import About from '../routes/about'
import Story from '../routes/story'

export default class App extends Component {
  render () {
    return (
      <div id='app'>
        <Scene />
        <Header />
        <Router>
          <Home path='/' />
          <About path='/about' />
          <Story path='/story' />
        </Router>
      </div>
    )
  }
}
