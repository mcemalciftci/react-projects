import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalPrice:0

}
const ProductSlice = createSlice({
    name:"prduct",
    initialState,
    reducers:{
        productAdd (state,action) {
          const newItem = action.payload
          const existingItem =state.items.find(s=>s?.id===newItem?.id)
          if(!existingItem){

              state.items.push({...newItem,quantity:1})
          }else{
            existingItem.quantity ++
            state.totalPrice =+ newItem.price
        }
        // state.totalPrice=state.items.reduce((acc,item)=>
        //   acc += item?.price
         
        // )
        //   console.log(state.totalPrice)
        }
    }

})

export const ProductActions = ProductSlice.actions;

export default ProductSlice