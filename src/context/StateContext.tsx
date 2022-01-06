import React, { useRef, useContext, FC } from "react";

const StateContext = React.createContext<any>(null);

export const useStateContext = () => {
  return useContext(StateContext);
};

export const StateProvider: FC = ({ children }) => {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);

  return (
    <StateContext.Provider value={{ sectionOneRef, sectionTwoRef }}>
      {children}
    </StateContext.Provider>
  );
};
