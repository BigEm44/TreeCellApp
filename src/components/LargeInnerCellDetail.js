import React, { useContext } from 'react';
import { LargeInnerContext } from '../context/LargeInnerContext';

const LargeInnerCellDetail = ({ innerCell }) => {
  const { dispatchLarge } = useContext(LargeInnerContext);
  return (
    <div className="largeInnerCellDetail">
      <div className="lineVertical" />
      <div className="lineHorizontal" />
      <div className="innerCellContent innerCellStyle">
        <div className="cellContent">{innerCell.innerTitle}</div>
        <div
          className="removeButton"
          onClick={() =>
            dispatchLarge({ type: 'REMOVE_INNERCELL', id: innerCell.id })
          }
        >
          -
        </div>
      </div>
    </div>
  );
};

export default LargeInnerCellDetail;
