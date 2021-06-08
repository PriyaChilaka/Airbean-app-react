 const addMenu = (menu) => {
    return {
        type: 'ADD_MENU',
        payload: menu
    }
}
 
const getMenu = (menu) => {
    return {
        type:'FETCH_MENU',
        payload:menu
    }
    
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {addMenu,getMenu}