 const addOrder = (orders) => {
    return {
        type: 'ADD_ORDER',
        payload: orders
    }
}
 
 const postOrder = (orders) => {
    return {
        type: 'POST_ORDER',
        payload: orders
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