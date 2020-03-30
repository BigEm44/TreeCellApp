import React, { useState, useContext } from 'react';
import LargeInnerCellDetail from './LargeInnerCellDetail';
import Modal from './Modal';
import { LargeInnerContext } from '../context/LargeInnerContext';
import { ModalContext } from '../context/ModalContext';

const LargeCell = () => {
  const [remove, setRemove] = useState(false);
  const removeLargeCell = () => setRemove(true);
  const { innerCells } = useContext(LargeInnerContext);
  const { openModal, largeInnerCellModalisOpen } = useContext(ModalContext);
  return (
    <div className={remove ? 'displayNone' : 'largeCell'}>
      <p className="lineText">And</p>
      <div className="lineVertical"></div>
      <div className="lineHorizontal"></div>
      <div className="cellBorder">
        <div
          className="removeButton deleteAllButton"
          onClick={() => removeLargeCell()}
        >
          -
        </div>
        <div className="largeInnerCell">
          {innerCells.map(innerCell => {
            return (
              <LargeInnerCellDetail innerCell={innerCell} key={innerCell.id} />
            );
          })}
          <Modal />
          <div
            onClick={() => openModal(largeInnerCellModalisOpen())}
            className="addLargeInnerCell addCell"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCell;
