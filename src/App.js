import './App.css';
//import { useState, createContext } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import orderHistory from './views/orderHistory'
import About from './views/About'
import Profile from './views/Profile'
import Menu from './views/Menu'
import  User  from './views/User'
//import Profile from './views/Profile'
import orderStatus from './views/orderStatus'
import Navbar from './views/Navbar'

//const UserContext = createContext(undefined)
//const UpdateContext = createContext(undefined)

function App() {

   //const [username, setUsername] = useState('')
    //const [password, setPassword] = useState('')

  return (
<div className="App">
      <BrowserRouter>
      
      <Switch>
        
        <Route path="/about" component={ About } />
        <Route path="/menu" component={ Menu } />
          <Route path="/orderstatus" component={orderStatus} />
          <Route path="/orderhistory" component={orderHistory} />
         
          <Route path="/navbar" component={Navbar} />
          <Route path="/user" component={User} exact />
          <Route path="/" component={ Profile } />
            </Switch>
            
      </BrowserRouter>
    </div>
  )
}


 // eslint-disable-next-line import/no-anonymous-default-export
 export default App 