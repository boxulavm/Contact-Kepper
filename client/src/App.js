import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


import AuthState from './context/auth/AuthState'
import ContactState from './context/contacts/ContactState'
import './App.css';

const App = () => {


  return (
    <AuthState>
    <ContactState>
      <Router>
        <Navbar />
        <div className="container pt-5">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
      </ContactState>
      </AuthState>
  );
}

export default App;
