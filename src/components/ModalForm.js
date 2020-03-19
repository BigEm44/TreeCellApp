import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalContext } from '../context/ModalContext';
import { CellContext } from '../context/CellContext';
import { LargeInnerContext } from '../context/LargeInnerContext';

const ModalForm = () => {
  const [title, setTitle] = useState('');
  const { addCell } = useContext(CellContext);
  const { addInnerCell } = useContext(LargeInnerContext);
  const {
    closeModal,
    largeInnerCellModal,
    largeInnerCellModalisClose
  } = useContext(ModalContext);

  const handleSubmit = e => {
    e.preventDefault();
    addCell(title);
    setTitle('');
    closeModal(largeInnerCellModalisClose());
  };

  const handleInnerSubmit = e => {
    e.preventDefault();
    addInnerCell(title);
    setTitle('');
    closeModal(largeInnerCellModalisClose());
  };

  return ReactDOM.createPortal(
    <aside className="modalArea">
      <div className="closeButtonSection }">
        <p onClick={() => closeModal(largeInnerCellModalisClose())}>x</p>
      </div>
      <div className="modalContent">
        <h2>Enter cell title</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxlength="18"
            placeholder="cell title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          {largeInnerCellModal ? (
            <button onClick={handleInnerSubmit} type="submit">
              Add
            </button>
          ) : (
            <input type="submit" value="Add" />
          )}
        </form>
      </div>
    </aside>,
    document.body
  );
};

export default ModalForm;
