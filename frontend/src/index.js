import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/Navbar';
import HomePage from './components/Home';
import LoginPage from './components/Login';
import SignUpPage from './components/SignUp';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App=()=>{
  return (
    <Router>
      <div className="">
        <NavBar>
          <Switch>
            <Route path="/">
              <HomePage/>
            </Route>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/signup">
              <SignUpPage/>
            </Route>
          </Switch>
        </NavBar>
      </div>
    </Router>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))