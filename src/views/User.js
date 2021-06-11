import { useState } from 'react';
import logo from '../assets/logo.png';

import Header from '../components/Header'
import {useHistory} from 'react-router-dom'

function User() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    function handleLogin() {
        fetch('http://localhost:8000/api/account', {
            body: JSON.stringify({ username: username, password: password }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then((response) => response.json())
            .then(result => {
                console.log('Success:', result)
                history.push("/")
            })
            .catch(error => {
                console.error('Error:', error)
            })
    
  }
    
    return (
        <div className="login">
            <Header />
            <div id="profile">
    <img src={logo} alt="profilepic"/>
            <form className="login_form">
                
                <input type="username" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <button type="button" className="submit_btn" onClick={handleLogin}></button>
                </form>
                </div>
        </div>
    )
}



export default User