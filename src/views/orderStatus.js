//import './orderstatus.css'

import drone from '../assets/drone.png'
import {useState} from 'react'
import Header from '../components/Header'
import {useHistory} from 'react-router-dom'

function orderStatus() {
// eslint-disable-next-line react-hooks/rules-of-hooks
const [userId, setUserId] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [id, setId] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory()
  
function handleOk() {
        fetch('http://localhost:8000/api/order/:id', {
            body: JSON.stringify({ userId: userId, id: id }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
            .then((response) => response.json())
            .then(result => {
                console.log('Your Order Accept:', result)
                history.push('/Menu')
            })
            .catch(error => {
                console.error('Error:', error)
            })
    
  }
  


  
  return (
    <div>
      <Header />
    <div id="order_status">
    <img src={drone} alt="Coffee Cup"/>
        <h2 id="title-orderstatus">Your Oder is on the Way!</h2>
         <form className="status_form">
                
                <input type="id" placeholder="userid" value={userId} onChange={(e) => setUserId(e.target.value)}></input>

                <input type="id" placeholder="id" value={id} onChange={(e) => setId(e.target.value)}></input>

                
                </form>
    <button id="ok" type="button" onClick={ handleOk }>Ok, cool!</button>
    </div>
    </div>
  )
}

export default orderStatus