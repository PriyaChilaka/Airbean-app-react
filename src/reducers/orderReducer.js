const initState = {
    menu: [],
    orders:[]
}


let orderID=0
export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':{
            return {
                ...state,
                orders: [
                    ...state.menu, {
                        orderID:orderID++,
                        task: action.payload,
                        done:false
                    }
                ]
            }

        }
             case 'GET_ORDER':
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