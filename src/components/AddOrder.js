import { useState } from 'react';
import {  useSelector } from 'react-redux';
import  {useHistory} from 'react-router-dom'
//import actions from '../actions/orderAction';

function AddOrder() {
   // const [menu, setMenu] = useState('');
    const [order, setOrder] = useState('')
    const [selection, setSelection] = useState('')
    const currentOrder = useSelector((state) => { return state.order })
     const userId = useSelector((state) => {return state.userId})
    //const dispatch = useDispatch();
    const history = useHistory()

    //This sets Local Storage value
    function inputChange({ target }) {
    setSelection(target.value)
}

    function addToOrder() {
        console.log('currentOrder', currentOrder)
       currentOrder.push(selection)
        setOrder(currentOrder)
    }
    
// function handleClick() {
     // dispatch(actions.addOrder(menu))
    //}
//Checkout
    function Checkout() {
        console.log('order', order)
        console.log('userId', userId)
        history.push('/Order')
    }
    
    return (
        <section className="add-order">
            <input className="input-field" placeholder="Place Order" 
            name="selection" onChange={inputChange} />
            <button onClick={addToOrder}>Add To Order</button>
            <div className="plus" onClick={() => addToOrder()}></div>

            <div>
                <button onClick={Checkout} > Checkout </button>
            </div>
        </section>
    )
}

export default AddOrder;