const initState = {
    menu: []
}

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':{
            return {
                ...state,
                menu: [
                    ...state.menu, {
                        id:state.menu.length+1,
                        task:action.payload
                    }
                ]
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