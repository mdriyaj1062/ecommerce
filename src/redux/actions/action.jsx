
// Add Item
export const ADD =(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}
// remove Item

export const DLT=(id)=>{
    return{
        type:"RMV_CART",
        payload:id
    }
}
