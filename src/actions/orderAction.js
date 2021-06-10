 const addOrder = (id) => {
    return {
        type: 'ADD_ORDER',
        payload: id
    }
}
 
 const updateOrder = (id) => {
    return {
        type: 'ADD_ORDER',
        payload: id
    }
}
const getMenu = (menu) => {
    return {
        type:'FETCH_MENU',
        payload:menu
    }
    
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {addOrder,getMenu,updateOrder}