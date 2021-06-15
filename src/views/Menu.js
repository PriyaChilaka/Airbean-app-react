import bag from'../assets/bag.png'
//import add from '../assets/add.png'
import '../css/Menu.css'
import { useHistory } from 'react-router-dom'
import AddOrder from '../components/AddOrder'
import Modal from "react-modal";
import {  useDispatch ,useSelector} from 'react-redux';
import { useEffect ,useState } from 'react';


import MenuItem from '../components/MenuItem';

import Header from '../components/Header';
import Footer from '../components/Footer';

import actions from '../actions/orderAction';


function Menu() {
  //const [menu,setMenu] =useState([])
 
 const menu = useSelector((state) => { return state.menu })
  const orders = useSelector((state) => { return state.orders })

  const dispatch = useDispatch()
  //const history = useHistory()
//console.log('addorder',AddOrder)
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

  const history = useHistory()

  function toggleModal() {
    setIsOpen(!isOpen);
    history.push('/Order')
  }
   function handlePay() {

    fetch('http://localhost:8000/api/order', {
      body: JSON.stringify({ orders }),
      headers: {
          'Content-Type': 'application/json'
       },
      method: 'POST'
    })
      .then((response) => response.json())
      .then(result => {
      console.log('Success:', result)

      const status = {
        id: result.id,
        eta: result.eta
      }

      dispatch(actions.postOrder(status))
      console.log('postOrder:', status)
      history.push("/orderstatus")
   })
      .catch(error => {
      console.error('Error:', error)
   })
    
  }

   return (
    <div id="menu">
      <Header />
    <div>
      <div id="circle">
      <img id="bag" src={ bag } alt="Varukorg" role= "button" onClick={toggleModal}/>

      <Modal
        appElement={document.getElementById('menu')}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="mymodal"
        overlayClassName="myoverlay"
      >
        <h2 id="title-overlay">Your OrderConfirmation</h2>

        <ul className="order-list">
            { orders.length > 0 && orders.map((menu1) => {
                return <AddOrder task={ menu1 } key={`index-${ menu1.id }`} /> 
                
            }) }
        </ul>

        <button id="pay" onClick={ handlePay }>Take my money!</button>
      </Modal>

      <div id="small-circle">
        <p id="number">0</p>
      </div>
      </div>
     
      <h2 id="title-menu">Menu</h2>
       
        <ul className="menu-list">
            { menu.map((menu1) => {
                return <MenuItem task={ menu1 } key={ menu1.id } /> 
            }) }
        </ul>

    </div>

    <Footer />
    </div>
  )

}

export default Menu;
