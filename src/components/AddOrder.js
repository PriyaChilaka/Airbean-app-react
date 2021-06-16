import './AddOrder.css'

function AddOrder({ task }) {

  console.log('AddOrder:',task)
  return (
       
      <div>
        <li className="title-cart">{ task.task.title }.............. </li>
        <li className="price-cart">{ task.task.price } kr</li>
        <p id="total">Total..............</p>
      <p id="moms">Inkl moms + drönarleverans</p>
       <i className="arrow up"></i><p>1</p><i className="arrow down"></i>
        </div>
       
    )
}

export default AddOrder