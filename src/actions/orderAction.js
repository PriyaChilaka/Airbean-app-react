const getMenu = (menu) => {
  return {
      type:'FETCH_MENU',
      payload: menu
  }
}

const addOrder = (orderID) => {
  return {
    type: 'ADD_ORDER',
    payload: orderID
  }
}

const postOrder = (orderID) => {
  return {
    type: 'POST_ORDER',
    payload: orderID
  }
}
const countClick = (task) => {
  return {
    type: 'ADD_COUNT',
    payload: task
  }
}
const getOrder = (userId) => {
  return {
    type: 'FETCH_ORDER',
    payload: userId
  }
}
const setUserId = (orderID) => {
  return {
    type: 'POST_ORDER',
    payload: orderID
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default { getMenu, addOrder, postOrder,countClick,getOrder,setUserId}