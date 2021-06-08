const initState = {
    menus: []
}

export const menusReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_MENUS':
            return {
                ...state,
                menus: action.payload
            }
        default:
            return state;
    }
}