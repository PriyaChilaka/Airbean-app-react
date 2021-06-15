const addOrder = (orderID) => {
  return {
    type: 'ADD_ORDER',
    payload: orderID
  }
}

const setUserId= (status) => {
  console.log('status=', status);
  return {
    type: 'POST_USERID',
    payload: status
  }
}
const getOrder = (orders) => {
  return {
      type: 'FETCH_ORDER',
      payload: orders
  }
}
const updateCounter = (orders) => {
  return {
      type: 'UPDATE_COUNTER',
      payload: orders
  }
}
const postOrder = (orderID) => {
  return {
    type: 'POST_ORDER',
    payload: orderID
  }
}

const getMenu = (menu) => {
  return {
      type:'FETCH_MENU',
      payload: menu
  }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default { addOrder, getOrder, postOrder, getMenu,setUserId,updateCounter}