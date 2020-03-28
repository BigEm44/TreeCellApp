import React, { createContext, useReducer } from 'react';
import { cellReducer } from '../reducers/cellReducer';

export const CellContext = createContext();

const CellContextProvider = props => {
  const [cells, dispatch] = useReducer(cellReducer, [
    { title: 'Income yearly 45k USD+', id: 2 }
  ]);
  return (
    <CellContext.Provider value={{ cells, dispatch }}>
      {props.children}
    </CellContext.Provider>
  );
};

export default CellContextProvider;
