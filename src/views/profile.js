

import user from '../assets/user.png';
import orderHistory from './orderHistory'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'

function Profile() {

   const userId = useSelector((state) => { return state.userId})
  const history = useHistory()
  history.push('/')

  return (
    <div>
         <Header />
    <div id="user">
    <img src={user} alt="Profilepic"/>

    <h3 className="profile-text">{ userId }</h3>

    <h2 id="text-profile">Orderhistorik</h2>

    <orderHistory />
    </div>
 
        

   
    </div>
  )
}



export default Profile