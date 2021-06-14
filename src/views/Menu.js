import bag from'../assets/bag.png'
import add from '../assets/add.png'
import '../css/Menu.css'
import { useHistory } from 'react-router-dom'
import Modal from "react-modal";
import {  useDispatch ,useSelector} from 'react-redux';
import { useEffect ,useState } from 'react';
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
  const history = useHistory()

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

   const [isOpen, setIsOpen] = useState(false);

  //const history = useHistory()

  function toggleModal() {
    setIsOpen(!isOpen);
    history.push('/Order')
  }

  return (
    <div id ="menu">
               <Header />
        <div>
        <div id="circle">
      <img id="bag" src={bag} alt="Cart" role= "button" onClick={toggleModal}/>
        
       <Modal
        appElement={document.getElementById('menu')}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="mymodal"
        overlayClassName="myoverlay"
      ></Modal>
          
          <div id="small-circle">
        <p id="number">0</p>
      </div>
      </div>
          <h2 id="title-menu">Menu</h2>
          <ul className="menu-list">
            { menu.map((menu1,index) => {
              return <MenuItem task= { menu1.title } task1={ menu1.desc } task2={ menu1.price }  key={ index} />
            }) }
        </ul>
    <AddOrder />
      
         <div id="menu-items">
    <img id="add" src={add} alt="Add To Cart"/>
    <p>Coffee 1</p>
    <img id="add" src={add} alt="Add To Cart"/>
    <p>Coffee 2</p>
    <img id="add" src={add} alt="Add To Cart"/>
    <p>Coffee 3</p>
    <img id="add" src={add} alt="Add To Cart"/>
    <p>Coffee 4</p>
    <img id="add" src={add} alt="Add To Cart"/>
    <p>Coffee 5</p>
    <img id="add" src={add} alt="Add To Cart"/>
    <p>Coffee 6</p>
    </div>
        

      </div>
      <Footer />
   </div>
  );
}

export default Menu;
