import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import About from './views/About'
import Menu from './views/Menu'
import User from './views/User'
import Profile from './views/Profile'
import Order from './views/Order'
import Navbar from './views/Navbar'


function App() {

  return (
<div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" component={ Profile } exact />
        <Route path="/About" component={ About } />
        <Route path="/Menu" component={ Menu } />
        <Route path="/User" component={ User } />
        <Route path="/Order" component={ Order } />
        <Route path="/Navbar" component={ Navbar } />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App