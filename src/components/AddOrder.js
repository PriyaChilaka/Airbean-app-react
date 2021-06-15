function AddOrder({ task}) {

  console.log('AddOrder:',task)
  return (
       
      <div>
        <li className="title-cart">{ task.task.title }.............. </li>
        <li className="price-cart">{ task.task.price } kr</li>
        <p id="total">Total..............</p>
        <p id="moms">Inkl moms + drönarleverans</p>
        </div>
       
    )
}

export default AddOrder