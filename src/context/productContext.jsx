import React, { useState } from "react";
import { createContext } from "react";
export const productContext=createContext();
export default function ProductContext({children}){
    const [cardList,setCardList]=useState([])
 return (
   <productContext.Provider value={{ cardList, setCardList }}>
     {children}
   </productContext.Provider>
 );
}

