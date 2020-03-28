import React, { createContext, useReducer } from 'react';
import { largeInnerReducer } from '../reducers/largeInnerReducer';

export const LargeInnerContext = createContext();

const LargeInnerContextProvider = props => {
  const [innerCells, dispatchLarge] = useReducer(largeInnerReducer, [
    { innerTitle: 'Ethnicity', id: 1 },
    { innerTitle: 'Black', id: 2 },
    { innerTitle: 'Hispanic', id: 3 }
  ]);
  return (
    <LargeInnerContext.Provider value={{ innerCells, dispatchLarge }}>
      {props.children}
    </LargeInnerContext.Provider>
  );
};

export default LargeInnerContextProvider;
