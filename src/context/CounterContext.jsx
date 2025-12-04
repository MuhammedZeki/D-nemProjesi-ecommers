import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContextt = createContext();

const CounterContext = ({ children }) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount((p) => p + 1);
  };
  const descrement = () => {
    if (count > 1) {
      setCount((p) => p - 1);
    }
  };
  const value = {
    count,
    increment,
    descrement,
  };
  return (
    <CounterContextt.Provider value={value}>
      {children}
    </CounterContextt.Provider>
  );
};

export default CounterContext;
