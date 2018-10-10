import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Scene from './scene'

// Code-splitting is automated for routes
import Home from '../routes/home'
import About from '../routes/about'
import Story from '../routes/story'

export default class App extends Component {
  handleRoute = (event) => {
    if (typeof window === 'undefined') return
    if (window.ga) window.ga('send', 'pageview', event.url)
  }

  render () {
    return (
      <div id='app'>
        <Scene />
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path='/' />
          <About path='/about' />
          <Story path='/story/:storyId' />
        </Router>
      </div>
    )
  }
}
