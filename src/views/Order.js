//import {  /*useDispatch */useSelector} from 'react-redux';
//import { /*useEffect */} from 'react';
//import actions from './actions/orderAction';
//import OrderItem from './components/OrderItem';

function Order() {
  //const [menu,setMenu] =useState([])
 // const order = useSelector((state) => { return state.order})
 // const dispatch = useDispatch()

 /* useEffect(() => {
    async function getOrder() {
      const response = await fetch('http://localhost:8000/api/order/:id')
      const data = await response.json()
      console.log('getOrder:', data)
     // setMenu(data.results)
      dispatch(actions.getOrder(data.order))
    }

    getOrder()
  }, [dispatch])*/

  return (
    <section>
      <article className="menu-app">
        
        <h1>Orders</h1>
        <ul className="menu-list">
            {/* order.map((order1) => {
              return <OrderItem order= { order1.orderId } order1={ order1.eta } order2={ order1.time }  key={ order1.id } />
            }) */}
        </ul>
      </article>
    
      
      
    </section>
  );
}

export default Order;
