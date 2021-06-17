
import cross from'../assets/cross.png'

import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import '../css/Navbar.css'

function Navbar() {

  const history = useHistory();
  
function presentPage(){

  history.go(-1); return false

}

  return (
    <div >
    <img id="cross" src={ cross } alt="menucross" role="button" onClick={presentPage}/>
    <nav>
      <Link className="text-link" to="/Menu">Menu</Link>
      <hr></hr>
      <Link className="text-link" to="/About">About Coffee</Link>
      <hr></hr>
      <Link className="text-link" to="/User">My Profile</Link>
      <hr></hr>
        <Link className="text-link" to="/Order">Orderstatus</Link>
        <hr></hr>
        <Link className="text-link" to="/Profile">Profile</Link>
    </nav>
    </div>
  )
}

export default Navbar