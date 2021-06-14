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
                history.push('/')
            })
            .catch(error => {
                console.error('Error:', error)
            })
    
  }
    
    return (
        <div >
            
            <Header />
            
            <div className="wrapper">
                <img id="logo" src={logo} alt="Airbean Login" />
                <h1>Welcome to Airbean-Family</h1>
                 <p id="text-signup">Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
            <form className="login_form">
                    <label>
                        <p className="label"></p>
                        <input type="username" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        </label><br></br>
                    <label>
                        <p className="label"></p>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                    </label><br></br>
                     
                    <label>
          <input id="radio" type="radio"></input>GDPR Ok!
          </label><br></br>
                    
                <button id ="login-" type="button" className="submit_btn" onClick={handleLogin}> Login</button>
                </form>
                </div>
        </div>
    )
}



export default User