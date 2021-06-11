const initState = {
    menu: [],
    orders:[]
}


let index =0
export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ORDER': {
            
            return {
                ...state,
                orders: [
                    ...state.orders, {
                        index:index++,
                        task: action.payload,
                        done:false
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