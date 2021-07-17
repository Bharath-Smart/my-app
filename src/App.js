import './App.css';
import React from 'react'
import Signin from './Signin'
import Signup from './Signup'
import Navbar from './Navbar/Navbar'
import Dashboard from './Dashboard'
import { BrowserRouter,Route,Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Signin" exact component={Signin} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App




 
