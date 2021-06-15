import drone from '../assets/drone.png';

//import { useHistory } from 'react-router-dom'
import {   useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

//import OrderItem from '../components/OrderItem';
//import actions from '../actions/orderAction';


function OrderStatus() {

  const [data, setData] = useState('')
 //const dispatch = useDispatch()
  const userId = useSelector((state) => { return state.userId })
 //const history=useHistory('')
  
  
  function getOrder() {
    console.log('userId', userId)
    fetch('http://localhost:8000/api/order', {
      body: JSON.stringify({ 'userId': userId, 'id': [] }),
      headers: {
        'content-Type':'application.json'
      },
      method:'POST'
    })
      .then((response) => response.json())
      .then(result => {
        setData(result)
        console.log('Thank you for ordering', result)
        
      }) 
  }
  useEffect(() => {
    getOrder()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  //handleClick () {
  // dispatch(actions.getOrder(data))
  // history.push('/Menu')
// }
  
   

  return (
 <div>
           <div id="orderstatus">    
        <img src={drone} alt="different  with Coffee-Mug " />
        <div>Order  { data.time}</div>
        <h2 id="title-orderstatus">Your Order is On the way!</h2>
       
        <div>It will reach you in { data.ETA}</div>
        
      
    </div>
      
      </div>
      
    
  );
}

export default OrderStatus
