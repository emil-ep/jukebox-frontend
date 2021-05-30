import React from 'react'
import './Home.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function Home(props) {

    const homeText = props.location.state.token
    console.log("Home component")
    return (
      <>
        <div>{homeText}</div>
      </>
    );
}

export default Home
