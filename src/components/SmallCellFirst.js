import React, { useState } from 'react';

const SmallCellFirst = () => {
  const [remove, setRemove] = useState(false);
  const removeCell = () => setRemove(true);
  return (
    <div className={remove ? 'displayNone' : 'smallCellFirst'}>
      <p className="lineText">And</p>
      <div className="lineVertical"></div>
      <div className="lineHorizontal"></div>
      <div className=" cell cellBorder">
        <div className="title">Age 40+</div>
        <div className="removeButton" onClick={() => removeCell()}>
          -
        </div>
      </div>
    </div>
  );
};

export default SmallCellFirst;
