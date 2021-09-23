  //initiating reducers

const initState = {
    menu: [],
    orders: [],
   userId: [],
  selection: [],
     orderStatus: []
   
   
    
}
//let number=0
export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        //fetching menu
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
                    {
                        id: state.orders + 1,
                        task: action.payload,
                        done: false
                    }
                        
                    
                ]
            }
        }
        case "SET_USERID": {
      return {
        ...state,
        userId: action.payload,
      };
    }
    case "SET_SELECTION": {
      return {
        ...state,
        selection: action.payload,
      };
    }
   case "POST_USERID": {
      console.log("POST_USERID=", action.payload);
      return {
        ...state,
        userId: action.payload,
      };
    }

             case 'POST_ORDER':
            return {
                ...state,
              orderStatus: action.payload
            }
            case "FETCH_ORDER": {
      return {
        ...state,
        orderid: action.payload,
      };
    }
     
       
default:
return state
}
}

export default orderReducer