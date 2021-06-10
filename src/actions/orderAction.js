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
const getMenu = (menu) => {
    return {
        type:'FETCH_MENU',
        payload:menu
    }
    
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {addOrder,getMenu,postOrder}