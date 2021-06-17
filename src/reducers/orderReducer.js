  const initState = {
    menu: [],
    orders:[],
     orderStatus: []
    //orderID: [],
    // userId: {}
//count:0
    
}
//let number=0
export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MENU': {
            return {
                ...state,
                menu:action.payload
            
                }
            }
        case 'ADD_ORDER':{
            return {
                ...state,
                orders: [
                    ...state.orders, 
                        
                        action.payload,
                        
                    
                ]
            }
        }
       
             case 'POST_ORDER':
            return {
                ...state,
              orderStatus: action.payload
            }
//case 'ADD_COUNT': {
    //return {
       //...state,
        
       //count:state.count +action.payload
    //}
        
       // }
        
 case 'SET_USERID':
      return {
        ...state,
        userId: action.payload
      }

default:
return state
}
}

export default orderReducer