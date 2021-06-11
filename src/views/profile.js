

import user from '../assets/user.png';

import Header from '../components/Header'

function Profile({setUserName, setPassWord,setId,setUserId,setOrderID}) {


  return (
    <div>
         <Header />
    <div id="user">
    <img src={user} alt="Profilepic"/>

<span>{setUserName}</span>
        <span>{setPassWord}</span>
        <span>{ setId}</span>
        <span>{setUserId}</span>
        <span>{setOrderID}</span>

    <h2 id="text-profile">OrderHistory</h2>
    </div>
    </div>
  )
}

fetch('http://localhost:8000/api/order/priya')
  .then(response => response.json())
  .then(data => console.log(data));

export default Profile