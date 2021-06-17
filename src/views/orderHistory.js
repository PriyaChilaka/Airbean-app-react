import {useState, useEffect} from 'react'
import '../css/orderHistory.css';
import {  useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import actions from '../orderAction'

//Function calling
function OrderHistory() {
  const [histories, setHistories] = useState([])
  const history= useHistory()
 // const orders = useSelector((state) => { return state.orders})
  const userId = useSelector((state) => { return state.userId})
  const dispatch = useDispatch()
 
 
    useEffect(() => {
    async function getOrderHistory() {
      
     // let url = 'http://localhost:8000/api/order/{don-g1j}'
      const response = await fetch( 'http://localhost:8000/api/order/'+userId)
      const data = await response.json()
      if (data.success === true) {
        console.log('getOrderHistory:', data)
        setHistories(data)
        console.log(data.success)
        dispatch(actions.setUserId(data.userId))
        history.push('/')
      }

      }
 
 
       getOrderHistory()
  }, [dispatch])
  console.log(histories)

  return (
      <ul className="order-wrap">
        {
        histories&&histories.map(post => <div>
  <li className="order-list" key={post.id}>
  #{post.orderID}</li>
  <li className="order-list">{post.eta}</li>
  <li className="order-list">total ordersumma {post.price} kr</li>
  <hr></hr>
  
  
  </div>

  )
 
        }
        
      </ul>
  )
}

export default OrderHistory;