import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

export default class App extends Component {


  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route 
        exact
         path="/"
            element={
              <News   key="general" country="in" category="general"/>
            } 
        ></Route>
        <Route 
        exact
         path="/business"
            element={
              <News   key="business" country="in" category="business"/>
            } 
        ></Route>
        <Route 
        exact
         path="/entertainment"
            element={
              <News   key="entertainment" country="in" category="entertainment"/>
            } 
        ></Route>
        <Route 
        exact
         path="/sports"
            element={
              <News   key="sports" country="in" category="sports"/>
            } 
        ></Route>
        <Route 
        exact
         path="/technology"
            element={
              <News   key="technology" country="in" category="technology"/>
            } 
        ></Route>
        <Route 
        exact
         path="/health"
            element={
              <News   key="health" country="in" category="health"/>
            } 
        ></Route>
        <Route 
        exact
         path="/science"
            element={
              <News   key="science" country="in" category="science"/>
            } 
        ></Route>
        
        
      </Routes>
      </BrowserRouter>
      
      
      </>
    )
  }
}
