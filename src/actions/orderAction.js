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
};
const getUserId = (id) => {
  return {
    type: 'FETCH_USERID',
    payload: id
  }
}*/
const setUserId = (id) => {
  
  return {
    type: "POST_USERID",
    payload: id,
  };
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getMenu, addOrder, postOrder,setUserId}