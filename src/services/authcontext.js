import React, {  createContext, useContext, useState } from "react";
// import Layout from "../screens/Layout/Index";

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({children}) => {
  const [addresses, setAddresses] = useState()
  const [defaultAddress,setDefaultAddress] = useState()
  

  return (
    <AuthContext.Provider value={{addresses,setAddresses }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
