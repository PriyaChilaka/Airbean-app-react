 const getOrder = (orders) => {
    return {
        type: 'FETCH_ORDER',
        payload: orders
    }
}
 
const setUserId = (status) => {
    return {
        type: 'POST_USERID',
        payload:status
    }
}
 const addOrder = (orders) => {
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
export default {getOrder,getMenu,addOrder,setUserId}