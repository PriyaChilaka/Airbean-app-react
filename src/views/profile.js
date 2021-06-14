

import user from '../assets/user.png';

import Header from '../components/Header'
//import {useHistory} from 'react-router-dom'

function Profile({setUserName, setPassWord}) {
  //const history = useHistory()
  //history.push('/Menu')

  return (
    <div>
         <Header />
    <div id="user">
    <img src={user} alt="Profilepic"/>
<h1>Sixten KaffeLöver</h1>
<span>{setUserName}</span>
        <span>{setPassWord}</span>
        

    <h2 id="text-user">OrderHistory</h2>
    </div>
    </div>
  )
}

fetch('http://localhost:8000/api/order/priya')
  .then(response => response.json())
  .then(data => console.log(data));

export default Profile