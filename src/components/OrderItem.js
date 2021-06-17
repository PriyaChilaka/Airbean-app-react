function OrderItem({ orderlist}) {

  return (
    <div>
      
     <li className="title">{ orderlist.orderlist.title } </li>
      <li className="price">{ orderlist.orderlist.price } kr</li>
      </div>
  )
}

export default OrderItem