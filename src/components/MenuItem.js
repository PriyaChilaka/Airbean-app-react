import add from '../assets/add.png'
import actions from '../actions/orderAction'
import {  useDispatch} from 'react-redux'
//import MeAddnuItem from './AddOrder'

function MenuItem({ task }) {
   
console.log('task:',task)
  const dispatch = useDispatch()


var number = 0

  function countClick() {

   number++
   document.getElementById("number").innerHTML = number
   dispatch(actions.addOrder(task))
  }

  return (
    <div>
      <div id="one-row">
      
      <li className="title"> <img role="button" onClick={ () => { countClick(task) }} id="add" src={add} alt="add to product"/>{ task.title }<br></br>{task.price} kr </li>
              <li className="price"></li>
              
      </div>
          <li id="desc">{task.desc}</li>
         
      </div>
      
  )
}

export default MenuItem