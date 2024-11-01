import React, { createContext, useEffect, useState } from "react";
import { gettLocalStorage, setLocalStorage } from "../utils/LocalStorage";

// Create context
export const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: null }); // Initialize state

  useEffect(() => {
    setLocalStorage();
    const authData = gettLocalStorage(); 
   ; 
    setUserData(authData); 
  }, []); 

 
  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
