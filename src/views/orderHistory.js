

import user from '../assets/user.png';
import '../css/orderHistory.css'
import Header from '../components/Header'
//import { useSelector } from 'react-redux';
//import {useHistory} from 'react-router-dom'

function Order() {

  
  //const history = useHistory()
 

  return (
    <div>
         <Header />
    <div >
    <img src={user} alt="Profilepic"/>

        <h3 className="profile-text">886766787</h3>

    <section className="user">
          <p>This is profile Page</p>
          <p>Priya.kolukuluri@hotmail.com</p>
        </section>
        <div className="titleOrder">
          <h1>OrderHistory</h1>
        </div>

        <div className="container">
          <div className="lefthis">
            <div className="left">
              <p>#AB1123282323Z</p>
              <p>Totalsumma</p>
            </div>
            <div className="left">
              <p>#AB1123282323Z </p>
              <p>Totalsumma</p>
            </div>
            <div className="left">
              <p>#AB1123282323Z</p>
              <p>Totalsumma</p>
            </div>
            <div className="leftTotal">
              <p>Total </p>
            </div>
          </div>
          <div className="righthis">
            <div className="right">
              <p>20/03/06</p>
              <p>233 kr</p>
            </div>
            <div className="right">
              <p>20/03/06</p>
              <p>233 kr</p>
            </div>
            <div className="right">
              <p>20/03/06</p>
              <p>100 kr</p>
            </div>
            <div className="rightTotal">
              <p>299 kr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
 
        

   
  
  )
}



export default Order