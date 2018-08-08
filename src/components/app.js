import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Scene from './scene'

// Code-splitting is automated for routes
import Home from '../routes/home'
import About from '../routes/about'
import Story from '../routes/story'

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event   "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
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
