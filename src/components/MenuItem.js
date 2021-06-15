import add from '../assets/add.png'
import actions from '../actions/orderAction'
import {  useDispatch,useSelector} from 'react-redux'
//import MeAddnuItem from './AddOrder'

function MenuItem({ task }) {
   const counter = useSelector((state) => { return state.counter})
console.log('task:',task)
  const dispatch = useDispatch()



  function countClick() {
    
    
    dispatch(actions.updateCounter(task))
   //document.getElementById("number").innerHTML = number
    
   dispatch(actions.addOrder(task))
  }

  return (
    <div>
      <div id="one-row">
      
      <li className="title"> <img role="button" onClick={ () => { countClick(task) }} id="add" src={add} alt="add to product"/>{ task.title }<br></br>{task.price} kr </li>{counter}
              <li className="price"></li>
              
      </div>
          <li id="desc">{task.desc}</li>
         
      </div>
      
  )
}

export default MenuItem