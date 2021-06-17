import './App.css';
import SignIn from './components/pages/SignIn';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Home from './components/pages/Home'
import Albums from './components/pages/Albums';


const ProtectedRoute 
  = ({ isAllowed, ...props }) => 
     isAllowed 
     ? <Route {...props}/> 
     : <Redirect to="/"/>;

const tokenAvailable = () => {
  if(localStorage.getItem("user-token") != null){
    return true
  }else return false

  // return localStorage.getItem("user-item") != null ? true : false
}

function App() {
  return (
    <Router>
      <Route exact path="/" component={SignIn}></Route>
      <ProtectedRoute isAllowed={tokenAvailable()} path="/home" component={Home}></ProtectedRoute>
      <ProtectedRoute isAllowed={tokenAvailable()} exact path="/albums" component={Albums}></ProtectedRoute>
    </Router>
  );
}

export default App;
