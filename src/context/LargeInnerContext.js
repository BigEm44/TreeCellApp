import React, { createContext, useReducer } from 'react';
import { largeInnerReducer } from '../reducers/largeInnerReducer';

export const LargeInnerContext = createContext();

const LargeInnerContextProvider = props => {
  const [innerCells, dispatchLarge] = useReducer(largeInnerReducer, [
    { innerTitle: 'Mammal', id: 1 },
    { innerTitle: 'Human', id: 2 },
    { innerTitle: 'Elephant', id: 3 }
  ]);
  return (
    <LargeInnerContext.Provider value={{ innerCells, dispatchLarge }}>
      {props.children}
    </LargeInnerContext.Provider>
  );
};

export default LargeInnerContextProvider;
