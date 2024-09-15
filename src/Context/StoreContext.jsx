import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext= createContext(null)
const StoreContextProvider=(props)=>{
   const [cartItem, setCartItem]=useState({});
   const addToCart=(itemId)=>{
      if(!cartItem[itemId]){
         setCartItem((prev)=>({...prev,[itemId]:1}))
      }
      else{
         setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
   }
   const removeFromCart=(itemId)=>{
      setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }
   const getTotalCartAmount=()=>{
      let TotalAmount=0;
      for(const item in cartItem){
         if(cartItem[item]>0){
         let itemInfo=food_list.find((product)=>product._id===item);
         TotalAmount+=itemInfo.price*cartItem[item]
      }
   }
   return TotalAmount;
   }
   const  contextvalue={
food_list,
addToCart,
removeFromCart,cartItem,setCartItem,getTotalCartAmount
   }
   return (
    <StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>
   )
}
export default StoreContextProvider;