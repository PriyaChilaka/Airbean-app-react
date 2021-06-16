import Header from '../components/Header';
import user from '../assets/user.png'
import Footer from '../components/Footer';
import {  useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import OrderItem from '../components/OrderItem';

 import '../css/order.css'

 
function OrderUser () {
  const [orderResponse, setOrderRes] = useState('');
  const orders = useSelector((state) => { return state.orders})
  const userId = useSelector((state) => { return state.userId})
  console.log('user id in order = ', orders);
  console.log('user id in userId = ', userId);
  const dispatch = useDispatch()
 // const history = useHistory()

  async function getOrder() {
       // eslint-disable-next-line no-undef
       let url=`http://localhost:8000/api/order/:${userId}`
      
      //  let url = 'localhost/order' + userId
       console.log('priya', userId)
      const response = await fetch(url);
        const data = await response.json();
        if(data)
        {
        console.log('data==', data.orders);
      // .then(result => {
        setOrderRes(data.orders);
      
        }

      
    }

  useEffect(() => {
        getOrder()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <div>
          
            
     
        <Header />
      <div id="profile">
       <img id="login_order" src={user} alt="Airbean Login" />  
        <h2 id="text_profile">Order history</h2>
        { orderResponse && orderResponse.map((orderlist, index) => {            
              return <OrderItem  order={orderlist.ETA} order1={ orderlist.orderID} order2={ orderlist.price} kr key={ index } />            
              
            }) }
      
     
      <Footer />
       </div>
       </div>
  );
}



export default OrderUser;