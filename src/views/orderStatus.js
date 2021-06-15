import '../css/orderStatus.css'
import drone from'../assets/drone.png'

import { useHistory } from 'react-router-dom'
import { useSelector} from 'react-redux'

function Orderstatus() {

    const history = useHistory()
    const orderStatus = useSelector((state) => { return state.orderStatus})

function handleOk() {
  history.push("/profile")
}

  return (
    <div>
    <div id="orderstatus">
    <img src={drone} alt="Drönare med kaffemugg"/>
    <h2 id="title-orderstatus">Din beställning är påväg!</h2>
    <p>{orderStatus.id}</p>
    <p>{orderStatus.eta}</p>
    <button id="ok" type="button" onClick={ handleOk }>Ok, cool!</button>
    </div>
    </div>
  )
}
export default Orderstatus