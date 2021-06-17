
import {useState, useEffect} from 'react'
import '../css/orderHistory.css';
import user from '../assets/user.png';
import {  useDispatch,useSelector } from 'react-redux';
//import { useHistory } from 'react-router-dom'
import actions from '../actions/orderAction'

//Function calling
function OrderHistory() {
 // const offers = useSelector((state) => { return state.offers})
 const userId = useSelector((state) => { return state.userId})
  const [orderhistory, setOrderhistory] = useState()
const dispatch = useDispatch()
  
   //getting order using api,response,result
  useEffect(() => {
    async function getOrderHistory() {
      
      let url = `http://localhost:8000/api/order/${userId}`      
      const response = await fetch(url)
      const data = await response.json()
      
      //here is the condition for orderhistory
      
      if (data.success === true) {
        console.log('getOrderHistory:', data)
        setOrderhistory(data.order)
        console.log(data.success)
       dispatch(actions.setUserid(userId))
       // history.push('/')
      } else {
        setOrderhistory(null)
      }

      }
 
 
       getOrderHistory()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])
  //console.log(orderhistory)

  return (
    <section className="orderHistory">
      <img src={user} alt="Profilepic" />
      <h1 className="orderuserid">{userId}</h1>
      <p className="orderemail">Priyakolukuluri@hotmail.com</p>
      <ul className="order-wrap">
        {
        orderhistory.map((post) => <div>
  <li className="order-list" key={post.id}>
  #{post.orderID}</li>
  <li className="order-list">{post.eta}</li>
  <li className="order-list">total ordersumma {post.price} kr</li>
  <hr></hr>
  
  
  </div>

  )
 
        }
        
      </ul>
      </section>
  )
}

export default OrderHistory;