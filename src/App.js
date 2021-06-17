import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import orderHistory from './views/orderHistory'
import About from './views/About'
import Menu from './views/Menu'
import User from './views/User'
//import Profile from './views/Profile'
import orderStatus from './views/orderStatus'
import Navbar from './views/Navbar'


function App() {

  return (
<div className="App">
      <BrowserRouter>
      <Switch>
        
        <Route path="/about" component={ About } />
        <Route path="/menu" component={ Menu } />
          <Route path="/orderstatus" component={orderStatus} />
          <Route path="/orderhistory" component={orderHistory} />
         
          <Route path="/navbar" component={Navbar} />
          <Route path="/" component={ User } exact /> 
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App