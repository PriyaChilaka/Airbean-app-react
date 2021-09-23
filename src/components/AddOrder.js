import './AddOrder.css'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function AddOrder({ task }) {

  console.log('AddOrder:', task)
   const [selection, setSelection] = useState("");
  // const currentOrder = useSelector((state) => { return state.order})
  const userId = useSelector((state) => {
    return state.userId;
  });
  const history = useHistory();

  // This sets local selection value
  function inputChange({ target }) {
    setSelection(target.value);
  }
   function checkout() {
    // post userId + order information to order API endpoint
    history.push('/orderStatus');
  }

  return (
       //adding the orders
      <div>
        <li className="title-cart">{ task.title }.............. </li>
        <li className="price-cart">{ task.price } kr</li>
       
       <i className="arrow up"></i><p>1</p><i className="arrow down"></i>
        </div>
       
    )
}

export default AddOrder