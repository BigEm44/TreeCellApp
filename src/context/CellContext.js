import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CellContext = createContext();

const CellContextProvider = props => {
  const [cells, setCells] = useState([
    { title: 'Income yearly 45k USD+', id: 2 }
  ]);
  const addFirstCell = () => {
    setCells(cells[0]);
  };
  const addCell = title => {
    setCells([...cells, { title, id: uuidv4() }]);
  };
  const removeCell = id => {
    setCells(cells.filter(cell => cell.id !== id));
  };
  return (
    <CellContext.Provider value={{ cells, addCell, removeCell, addFirstCell }}>
      {props.children}
    </CellContext.Provider>
  );
};

export default CellContextProvider;
