import React from "react";
export const MyContext = React.createContext();


function AuthContext({children}) {
     const [isLogin,setLogin] =React.useState(false)
  return (
    <>
      <MyContext.Provider value={{isLogin,setLogin}}>{children}</MyContext.Provider>;
    </>
  );
}

export default AuthContext