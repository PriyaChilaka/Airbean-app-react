import logo from './assets/logo.png'
//import Order from './views/Order'
import './App.css';
import {  useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
//import About from './views/About'
import MenuItem from './components/MenuItem';
//import OrderItem from './components/OrderItem';
import Header from './components/Header';
import User from './components/User';

import Footer from './components/Footer';
import actions from './actions/orderAction';


function App() {
  //const [menu,setMenu] =useState([])
  const menu = useSelector((state) => { return state.menu })
  //const order=useSelector((state) =>{return state.order})
  const dispatch = useDispatch()

  useEffect(() => {
    async function getMenu() {
      const response = await fetch('http://localhost:8000/api/coffee')
      const data = await response.json()
      console.log('getMenu:', data)
     // setMenu(data.results)
      dispatch(actions.getMenu(data.menu))
    }

    getMenu()
  }, [dispatch])
 
  /*useEffect(() => {
    async function postOrder(order) {
       const response = await fetch('http://localhost:8000/api/order')
      const data = await response.json()
      console.log('postOrder:', data)
     // setMenu(data.results)
      dispatch(actions.postOrder(data.order))
      }
     postOrder()
    },[dispatch])*/
  return (
    <section>
      <article className="menu-app">
        <img src={ logo } alt="different  colors "/>
        <h1>Coffee-Shop</h1>
        <ul className="menu-list">
            { menu.map((menu1) => {
              return <MenuItem task= { menu1.title } task1={ menu1.desc } task2={ menu1.price }  key={ menu1.id } />
            }) }
        </ul>
       
      </article>
    
      <User />
      <Header />
      <Footer />
    </section>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line no-undef
export default  App;
