import React, { Component } from 'react'
// import './Home.css'
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>B Counter</h1>
        <Link to='/register'>
          <button>
            Get Started!
          </button>
        </Link>
        <p>Already have an account?</p>
        <Link to='/login'>
          <button>
            Log In
          </button>
        </Link>
      </div>
    )
  }
}

export default Home;