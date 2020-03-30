import React, { createContext, useReducer, useEffect } from 'react';
import { cellReducer } from '../reducers/cellReducer';

export const CellContext = createContext();

const CellContextProvider = props => {
  const [cells, dispatch] = useReducer(
    cellReducer,
    [{ title: 'Insects', id: 2 }],
    () => {
      const localData = localStorage.getItem('cells');
      return localData ? JSON.parse(localData) : [{ title: 'Insects', id: 2 }];
    }
  );
  useEffect(() => {
    localStorage.setItem('cells', JSON.stringify(cells));
  }, [cells]);
  return (
    <CellContext.Provider value={{ cells, dispatch }}>
      {props.children}
    </CellContext.Provider>
  );
};

export default CellContextProvider;
