import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
//import navicon from "../assets/navicon.png";
import OrderItem from "../components/OrderItem";
//import { Link } from "react-router-dom";
import actions from '../actions/orderAction'
//import "../styles/status.css";
// import {useHistory} from 'react-router-dom'

function OrderStatus() {
  //const [orderResponse, setOrderRes] = useState("");
  const order = useSelector((state) => { return state.order})
  const userId = useSelector((state) => {
    return state.userId;
  });
  const dispatch = useDispatch();
  // const history = useHistory()

    useEffect(() => {
  async function getOrder() {
    console.log("userId", userId);
    //let url = `http://localhost:8000/api/order/${userId}`;
    //let url='http://localhost:8000/api/order/MlTRNH0iJf';

    
    const response = await fetch(`http://localhost:8000/api/order/${userId}`);
    const data = await response.json();
      console.log('getorder:', data)
   dispatch(actions.getOrder(data))
      //setOrderRes(data.order);
    
  }


    getOrder();
    
  },[dispatch] );

  return (
    <div id="statushistory">
      <div>
        <article className="statusorder">
          <Header />
          <div id="statusnavicon"></div>
         
            
          <h1>Order history</h1>
          <img id="profileimage" src alt="Logo" />
          <div>Priya Kolukuluri</div>
          <div>priya.kolukuluri@iths.se</div>

          <div className="statusmenu">
            {
              order&&order.map((task) => {
                return (
                  <OrderItem
                    id="statusitem"
                    orderlist={task}
                    
                    key={task.id}
                  />
                );
              })}
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}

export default OrderStatus;