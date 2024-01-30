import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Components/Navbar'
import News from './Components/News'

export default class App extends Component {


  render() {
    return (
      <>
      <Navbar/>
      <News/>
      </>
    )
  }
}
