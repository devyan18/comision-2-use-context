import { createContext, useContext, useEffect, useState } from "react";

export const UsernameContext = createContext();

export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState("Francisco");

  useEffect(() => {
    setUsername("Jesus");
  }, []);

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};

export const useUsername = () => useContext(UsernameContext);
