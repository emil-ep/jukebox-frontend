import React, { useState } from 'react'
import './Home.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../Navbar'


function Home(props) {

  return (
  <>
  <Router>
    <Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Navbar>
  </Router>
  </>
  );
}

export default Home
