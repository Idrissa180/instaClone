import React, { useState } from "react";
import App from "./App";
import { hasAuthenticate, hasAuthenticated } from "./services/ApiRequest";
import Auth from "./context/Auth";
import UserContext from './context/UserContext';

export const Enter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  const [isUser, setIsUser] = useState(hasAuthenticate());

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <UserContext.Provider value={{ isUser, setIsUser }}>
        <App />
      </UserContext.Provider>
    </Auth.Provider>
  );
};
