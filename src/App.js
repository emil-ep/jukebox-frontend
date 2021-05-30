import './App.css';
import SignIn from './components/pages/SignIn';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Home from './components/pages/Home'


const ProtectedRoute 
  = ({ isAllowed, ...props }) => 
     isAllowed 
     ? <Route {...props}/> 
     : <Redirect to="/"/>;

const tokenAvailable = () => {
  console.log(localStorage.getItem("user-token"))
  if(localStorage.getItem("user-token") != null){
    return true
  }else return false

  // return localStorage.getItem("user-item") != null ? true : false
}

function App() {
  return (
    <Router>
      <Route exact path="/" component={SignIn}></Route>
      {/* <Route path="/home" component={Home}></Route> */}
      <ProtectedRoute isAllowed={tokenAvailable()} path="/home" component={Home}></ProtectedRoute>
    </Router>
  );
}

export default App;
