import React, { useContext } from 'react';
import { CellContext } from '../context/CellContext';

const SmallCellDetail = ({ cell }) => {
  const { dispatch } = useContext(CellContext);
  return (
    <div className="smallCellDetail">
      <p className="lineText">And</p>
      <div className="lineVertical"></div>
      <div className="lineHorizontal"></div>
      <div className=" cell cellBorder">
        <div className=" title">{cell.title}</div>
        <div
          className="removeButton"
          onClick={() => dispatch({ type: 'REMOVE_CELL', id: cell.id })}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default SmallCellDetail;
