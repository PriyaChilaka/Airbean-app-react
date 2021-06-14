const initState = {
    menu: [],
    orders: [],
    userId: [],
    selection:[]
}


//let index =0
export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ORDER': {
            
            return {
                ...state,
                orders: [
                    ...state.orders, {
                        id: state.order.length + 1,
            task: action.payload
                    }
                ]
            }

        }
             case 'POST_ORDER':
            return {
                ...state,
                orders: state.orders.map(order => {
                    if (order.orderID !== action.payload) {
                        return order;
                    }

                    return {
                        ...order,
                        done: !order.done
                    }
                })
            }
        case 'SET_USERID': {
            return {
                ...state,
                userId:action.payload
            }
        }
        
             case 'POST_USERID': {
            return {
                ...state,
                userId:action.payload
            }
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