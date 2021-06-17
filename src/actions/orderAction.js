const getMenu = (menu) => {
  return {
      type:'FETCH_MENU',
      payload: menu
  }
}

const addOrder = (id) => {
  return {
    type: 'ADD_ORDER',
    payload: id
  }
}

const postOrder = (id) => {
  return {
    type: 'POST_ORDER',
    payload: id
  }
}
/*const getOrderHistory = (id) => {
  return {
    type: "FETCH_ORDER",
    payload: id,
  };
};*/
const getUserId = (userId) => {
  return {
    type: 'SET_USERID',
    payload: userId
  }
}
/*function setUserId(userId) {
  return {
    type: 'SET_USERID',
    payload: userId
  };
}*/
// eslint-disable-next-line import/no-anonymous-default-export
export default { getMenu, addOrder,getUserId, postOrder}