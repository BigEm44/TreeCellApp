import React, { createContext, useReducer, useEffect } from 'react';
import { largeInnerReducer } from '../reducers/largeInnerReducer';

export const LargeInnerContext = createContext();

const LargeInnerContextProvider = props => {
  const [innerCells, dispatchLarge] = useReducer(
    largeInnerReducer,
    [
      { innerTitle: 'Mammal', id: 1 },
      { innerTitle: 'Giraffe', id: 2 },
      { innerTitle: 'Elephant', id: 3 }
    ],
    () => {
      const localData = localStorage.getItem('innerCells');
      return localData
        ? JSON.parse(localData)
        : [
            { innerTitle: 'Mammal', id: 1 },
            { innerTitle: 'Giraffe', id: 2 },
            { innerTitle: 'Elephant', id: 3 }
          ];
    }
  );
  useEffect(() => {
    localStorage.setItem('innerCells', JSON.stringify(innerCells));
  }, [innerCells]);
  return (
    <LargeInnerContext.Provider value={{ innerCells, dispatchLarge }}>
      {props.children}
    </LargeInnerContext.Provider>
  );
};

export default LargeInnerContextProvider;
