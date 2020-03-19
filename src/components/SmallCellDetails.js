import React, { useContext } from 'react';
import { CellContext } from '../context/CellContext';

const SmallCellDetail = ({ cell }) => {
  const { removeCell } = useContext(CellContext);
  return (
    <div className="smallCellDetail">
      <p className="lineText">And</p>
      <div className="lineVertical"></div>
      <div className="lineHorizontal"></div>
      <div className=" cell cellBorder">
        <div className=" title">{cell.title}</div>
        <div className="removeButton" onClick={() => removeCell(cell.id)}>
          -
        </div>
      </div>
    </div>
  );
};

export default SmallCellDetail;
