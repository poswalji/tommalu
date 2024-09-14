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
   const  contextvalue={
food_list,
addToCart,
removeFromCart,cartItem,setCartItem
   }
   return (
    <StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>
   )
}
export default StoreContextProvider;