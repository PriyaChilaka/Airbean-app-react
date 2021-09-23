function OrderItem({ orderlist}) {

  return (
    <div>
      
     <li className="title">{ orderlist.title } </li>
      <li className="price">{ orderlist.price } kr</li>
      <li className="price">{orderlist.time}</li>
       <li className="price">{ orderlist.userId }</li>
      </div>
  )
}

export default OrderItem