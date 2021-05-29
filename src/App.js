import './App.css';
import SignIn from './components/pages/SignIn';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
      {/* <div className="App">
        <SignIn />
      </div> */}
      {/* <Link to="/" ></Link> */}
      <Route exact path="/" component={SignIn}></Route>
      <Route path="/home" component={Home}></Route>
    </Router>
  );
}

export default App;
