import logo from './assets/logo.png'
import Order from './views/Order'
import './App.css';
import {  useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
//import About from './views/About'
import MenuItem from './components/MenuItem';
//import AddOrder from './components/AddOrder';
import Header from './components/Header';
import Footer from './components/Footer';
import actions from './actions/orderAction';


function App() {
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
        <img src={ logo } alt="different  colors "/>
        <h1>Coffee-Shop</h1>
        <ul className="menu-list">
            { menu.map((menu1) => {
              return <MenuItem task= { menu1.title } task1={ menu1.desc } task2={ menu1.price }  key={ menu1.id } />
            }) }
        </ul>
      </article>
    
      <Order />
      <Header />
      <Footer />
    </section>
  );
}

export default App;
