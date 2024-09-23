import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalPrice:0

}
const ProductSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        productAdd (state,action) {
          const newItem = action.payload
          const existingItem =state.items.find(s=>s?.id===newItem?.id)
          if(!existingItem){

              state.items.push({...newItem,quantity:1})
            }else{
                existingItem.quantity ++
            }
            const toplamFiyat = state.items.reduce((toplam, item) => {
                toplam += (item?.price || 0) * (item?.quantity || 1);
                return toplam;
            }, 0);
        
            state.totalPrice=toplamFiyat  
          
        }
    }

})

export const ProductActions = ProductSlice.actions;

export default ProductSlice