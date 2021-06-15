 const initState = {
    menu: [],
     orders: [],
    counter:0
}

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':{
            return {
                ...state,
                orders: [
                    ...state.orders, {
                        orderID: state.orders + 1,
                        task: action.payload,
                        done: false
                    }
                ]
            }
        }
            case 'UPDATE_COUNTER': {
            return {
                ...state,
                counter:action.payload
}
    
  }
            case 'SET_USERID': {
            return {
                ...state,
                userId:action.payload

            }
        }
             case 'POST_ORDER':
            return {
                ...state,
                orders: 
                state.orders.map(order => {
                    if (order.id !== action.payload) {
                        return order
                    }

                    return {
                        ...order,
                        done: !order.done
                    }
                })
              
            }
        case 'FETCH_MENU': {
return {
    ...state,
    menu:action.payload

    }
}
default:
return state
}
}

export default orderReducer