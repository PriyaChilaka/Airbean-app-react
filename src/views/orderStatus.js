
import drone from '../assets/drone.png'

import { useHistory } from 'react-router-dom'
import {  useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';

import OrderItem from '../components/OrderItem';

import actions from '../actions/orderAction';


function OrderStatus() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory()
  //const [menu,setMenu] =useState([])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const orders = useSelector((state) => { return state.orders})
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()
// eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function getOrder() {
      const response = await fetch('http://localhost:8000/api/order/:id')
      const data = await response.json()
      console.log('getOrder:', data)
     // setMenu(data.results)
      dispatch(actions.getOrder(data.orders))
    }

    getOrder()
  }, [dispatch])

  function handleClick() {
    dispatch(actions.getOrder(orders))
    history.push('/User')
    }

  return (
 <div>
           <div id="orderstatus">    
        <img src={ drone } alt="different  with Coffee-Mug "/>
        <h2 id="title-orderstatus">Your Order is On the way!</h2>
        <p>13 Mintutes</p>
        <ul className="menu-list">
            { orders.map((menu1,index) => {
              return <OrderItem order= { menu1.orderNumber } order1={ menu1.eta } order2={ menu1.price }  key={ index} />
            }) }
        </ul>
        <button id="ok" type="button" onClick={ handleClick }>Ok,cool!</button>
      
    </div>
      
      </div>
      
    
  );
}

export default OrderStatus
