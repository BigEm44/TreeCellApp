import React, { useContext } from 'react';
import { LargeInnerContext } from '../context/LargeInnerContext';

const LargeInnerCellDetail = ({ innerCell }) => {
  const { removeInnerCell } = useContext(LargeInnerContext);
  return (
    <div className="largeInnerCellDetail">
      <div className="lineVertical" />
      <div className="lineHorizontal" />
      <div className="innerCellContent innerCellStyle">
        <div className="cellContent">{innerCell.innerTitle}</div>
        <div
          className="removeButton"
          onClick={() => removeInnerCell(innerCell.id)}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default LargeInnerCellDetail;
