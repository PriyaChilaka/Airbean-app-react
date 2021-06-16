  const initState = {
    menu: [],
    orders:[],
      orderStatus: [],
      userId:[]

    
}
let number=0
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
                    ...state.orders, {
                        id: state.orders + 1,
                        task: action.payload,
                        done: false
                    }
                ]
            }
        }
        case 'SET_USERID':
          return  {
              ...state,
              userId:action.payload
            }
             case 'POST_ORDER':
            return {
                ...state,
                orderStatus: action.payload
            }
case 'ADD_COUNT': {
    return {
       ...state,
        number: number++,
        task:action.payload
    }
        
    }


default:
return state
}
}

export default orderReducer