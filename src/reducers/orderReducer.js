const initState = {
    menu: [],
    orders:[]
}

let id = 0
export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':{
            return {
                ...state,
                menu: [
                    ...state.menu, {
                        id:id++,
                        task: action.payload,
                        done:false
                    }
                ]
            }

        }
             case 'UPDATE_ORDER':
            return {
                ...state,
                menu: state.orders.map(order => {
                    if (order.id !== action.payload) {
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