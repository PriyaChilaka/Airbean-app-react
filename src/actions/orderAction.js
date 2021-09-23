//actions are going here

const getMenu = (menu) => {
  return {
      type:'FETCH_MENU',
      payload: menu
  }
}
const setUserId =(status) => {
 
  return {
    type: 'POST_USERID',
    payload: status
  };
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
const getOrder = (orderid) => {
  return {
    type: "FETCH_ORDER",
    payload: orderid,
  };
};

const setSelection = (selection) => {
  return {
    type: "POST_SELECTION",
    payload: selection,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getMenu, getOrder,setUserId,addOrder ,postOrder,setSelection}