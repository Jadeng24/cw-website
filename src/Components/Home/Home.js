import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
class Home extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    return (
      <div className='Home'>
        <Nav />
        <div className='mainContent'>
          <div className='mainContentTitle'><h1>Your message has been sent.</h1></div>
        </div>
      </div>
    )
  }
}
export default Home;