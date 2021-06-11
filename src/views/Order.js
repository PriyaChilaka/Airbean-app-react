import { useState } from 'react';
//import logo from '../assets/logo.png';

import Header from '../components/Header'
import {useHistory} from 'react-router-dom'

function Order() {
    const [orderID, setOrderID] = useState('')
    
    const history = useHistory()

    function handleTotal() {
        fetch('http://localhost:8000/api/account', {
            body: JSON.stringify({ orders: orderID}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then((response) => response.json())
            .then(result => {
                console.log('Your Order Finish:', result)
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
                
                <input  value={orderID} onChange={(e) => setOrderID(e.target.value)}></input>

                

                <button type="button" className="submit_btn" onClick={handleTotal}></button>
                </form>
                </div>
        </div>
    )
}



export default Order