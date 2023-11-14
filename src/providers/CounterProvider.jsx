import { createContext, useContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const sumar = () => setCounter(counter + 1);
  const restar = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider
      value={{
        counter,
        sumar,
        restar,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
