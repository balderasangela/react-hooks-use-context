import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
// import the provider
import { UserProvider } from "../context/user";

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default App;