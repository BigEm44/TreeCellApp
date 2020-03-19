import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const LargeInnerContext = createContext();

const LargeInnerContextProvider = props => {
  const [innerCells, setInnerCells] = useState([
    { innerTitle: 'Ethnicity', id: 1 },
    { innerTitle: 'Black', id: 2 },
    { innerTitle: 'Hispanic', id: 3 }
  ]);
  const addInnerCell = innerTitle => {
    setInnerCells([...innerCells, { innerTitle, id: uuidv4() }]);
  };
  const removeInnerCell = id => {
    setInnerCells(innerCells.filter(innerCell => innerCell.id !== id));
  };
  const removeAllInnerCells = () => {
    setInnerCells(innerCells.splice(0, 0));
  };
  return (
    <LargeInnerContext.Provider
      value={{ innerCells, addInnerCell, removeInnerCell, removeAllInnerCells }}
    >
      {props.children}
    </LargeInnerContext.Provider>
  );
};

export default LargeInnerContextProvider;
