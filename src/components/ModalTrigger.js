import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const ModalTrigger = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <div onClick={() => openModal()} className="addCell">
      +
    </div>
  );
};

export default ModalTrigger;
