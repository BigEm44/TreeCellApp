import React, { useContext } from 'react';
import { CellContext } from '../context/CellContext';
import SmallCellDetails from './SmallCellDetails';

const SmallCell = () => {
  const { cells } = useContext(CellContext);
  return (
    <div className="smallCell">
      {cells.map(cell => {
        return <SmallCellDetails cell={cell} key={cell.id} />;
      })}
    </div>
  );
};

export default SmallCell;
