import React, { useContext } from 'react';
import ModalForm from './ModalForm';
import { ModalContext } from '../context/ModalContext';

const Modal = () => {
  const { modal } = useContext(ModalContext);
  return (
    <React.Fragment>
      {modal ? <ModalForm /> : <React.Fragment />}
    </React.Fragment>
  );
};

export default Modal;
