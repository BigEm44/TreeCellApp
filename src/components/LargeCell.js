import React, { useContext } from 'react';
import LargeInnerCellDetail from './LargeInnerCellDetail';
import Modal from './Modal';
import { LargeInnerContext } from '../context/LargeInnerContext';
import { ModalContext } from '../context/ModalContext';

const LargeCell = () => {
  const { innerCells, removeAllInnerCells } = useContext(LargeInnerContext);
  const { openModal, largeInnerCellModalisOpen } = useContext(ModalContext);
  return (
    <div className="largeCell">
      <p className="lineText">And</p>
      <div className="lineVertical"></div>
      <div className="lineHorizontal"></div>
      <div className="cellBorder">
        <div
          className="removeButton deleteAllButton"
          onClick={() => removeAllInnerCells()}
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
