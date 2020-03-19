import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = props => {
  const [modal, setModal] = useState(false);
  const [largeInnerCellModal, setLargeInnerCellModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const largeInnerCellModalisOpen = () => setLargeInnerCellModal(true);
  const largeInnerCellModalisClose = () => setLargeInnerCellModal(false);
  return (
    <ModalContext.Provider
      value={{
        modal,
        largeInnerCellModal,
        openModal,
        closeModal,
        largeInnerCellModalisOpen,
        largeInnerCellModalisClose
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
