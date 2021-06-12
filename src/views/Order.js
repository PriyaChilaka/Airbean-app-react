import { useState } from 'react';
//import logo from '../assets/logo.png';

import Header from '../components/Header'
import {useHistory} from 'react-router-dom'

function Order() {
    const [orderID, setOrderID] = useState('')
    const [userId, setUserId] = useState('')
    const history = useHistory()

    function handleTotal() {
        fetch('http://localhost:8000/api/order', {
            body: JSON.stringify({ orderID: orderID,userid:userId}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then((response) => response.json())
            .then(result => {
                console.log('Your Order is Ready:', result)
                history.push("/")
            })
            .catch(error => {
                console.error('Error:', error)
            })
    
  }
    
    return (
        <div className="order">
            <Header />
            <div id="order_id">
   
            <form className="order_form">
                
                <input type="userid"  value={orderID} onChange={(e) => setOrderID(e.target.value)}></input>

                <input type="id" value={userId} onChange={(e) => setUserId(e.target.value)}></input>

                <button type="button" className="submit_btn" onClick={handleTotal}></button>
                </form>
                </div>
        </div>
    )
}



export default Order