import './AddOrder.css'

function AddOrder({ task }) {

  console.log('AddOrder:',task)
  return (
       
      <div>
        <li className="title-cart">{ task.title }.............. </li>
        <li className="price-cart">{ task.price } kr</li>
       
       <i className="arrow up"></i><p>1</p><i className="arrow down"></i>
        </div>
       
    )
}

export default AddOrder