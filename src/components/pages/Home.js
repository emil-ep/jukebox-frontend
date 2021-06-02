import './Home.css'
import Navbar from '../Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './SignIn';
import Albums from './Albums';

function Home(props) {

  return (
    <Router>
      <Navbar/>
        <Route path="/profile" component={SignIn}></Route>
        <Route path="/albums" component={Albums}></Route>
        <Route path="/artists" component={SignIn}></Route>
    
    </Router>
  );
}

export default Home
