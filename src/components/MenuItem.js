import add from '../assets/add.png'
import actions from '../actions/orderAction'
import {  useDispatch} from 'react-redux'
import './MenuItem.css'

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
      
       <img role="button" onClick={ () => { countClick(task) }} id="add" src={add} alt="add to product"/><li className="title">{ task.title } </li>
      <li className="price">{ task.price } kr</li>
              <li className="price"></li>
              
      </div>
          <li id="desc">{task.desc}</li>
         
      </div>
      
  )
}

export default MenuItem