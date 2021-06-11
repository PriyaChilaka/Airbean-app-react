import logo from '../assets/logo.png'
//import Order from './views/Order'

import {  useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
//import About from './views/About'
import MenuItem from '../components/MenuItem';
import AddOrder from '../components/AddOrder';
import Header from '../components/Header';
import Footer from '../components/Footer';
import actions from '../actions/orderAction';


function Menu() {
  //const [menu,setMenu] =useState([])
  const menu = useSelector((state) => { return state.menu})
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

  return (
    <section>
          <article className="menu-app">
               <Header />
        <img src={ logo } alt="different  colors "/>
        <h1>Coffee-Shop</h1>
        <ul className="menu-list">
            { menu.map((menu1,index) => {
              return <MenuItem task= { menu1.title } task1={ menu1.desc } task2={ menu1.price }  key={ index} />
            }) }
        </ul>
      </article>
    <AddOrder />
      
      
      <Footer />
    </section>
  );
}

export default Menu;
