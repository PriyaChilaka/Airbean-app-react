import add from '../assets/add.png'
import actions from '../actions/orderAction'
import {  useDispatch} from 'react-redux'
import './MenuItem.css'

//calling function
function MenuItem({ task }) {
   
console.log('task:',task)
  const dispatch = useDispatch()

//counting the cart
var count = 0

  function countClick() {

   count++
   document.getElementById("number").innerHTML = count
   dispatch(actions.addOrder(task))
  }

  return (
    <div>
      <div id="one-row">
      
        <img role="button" onClick={() => { countClick(task) }} id="add" src={add} alt="add to product" />
        <li className="title">{task.title} </li>
        <li className="price">{ task.price } kr</li>
              
              
      </div>
          <li id="desc">{task.desc}</li>
         
      </div>
      
  )
}

export default MenuItem