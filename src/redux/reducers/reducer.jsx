
const INIT_STATE={
    carts:[]
}


export const CartReducer = (state=INIT_STATE,action)=>{
   switch(action.type){
    case "ADD_CART":
       // Check if the item already exists in the cart:-
       const itemIndex = state.carts.findIndex(el => el.id === action.payload.id);

       if(itemIndex >= 0){
        state.carts[itemIndex].qnty +=1
    }else{
        const temp ={...action.payload,qnty:1}
        return{
            ...state,
            carts:[...state.carts,temp]
        }
    }
        case "RMV_CART":
            const data = state.carts.filter((el)=>el.id !==action.payload)
            return{
                ...state,
                carts:data
            }
        default:
            return state

   }
}