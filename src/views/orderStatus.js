
import drone from '../assets/drone.png'
//import Order from './views/Order'

import {  useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
//import About from './views/About'
import OrderItem from '../components/OrderItem';
//import AddOrder from '../components/AddOrder';
import Header from '../components/Header';
import Footer from '../components/Footer';
import actions from '../actions/orderAction';


function orderStatus() {
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
    }

  return (
    <section>
          <article className="menu-app">
               <Header />
        <img src={ drone } alt="different  colors "/>
        <h1>Your Order is On the way!</h1>
        <ul className="menu-list">
            { orders.map((menu1,index) => {
              return <OrderItem order= { menu1.orderNumber } order1={ menu1.eta } order2={ menu1.price }  key={ index} />
            }) }
        </ul>
        <button onClick={ handleClick }>Ok,cool!</button>
      </article>
    
      
      
      <Footer />
    </section>
  );
}

export default orderStatus
