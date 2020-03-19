import React from 'react';
import SmallCellFirst from './components/SmallCellFirst';
import SmallCell from './components/SmallCell';
import LargeCell from './components/LargeCell';
import ModalTrigger from './components/ModalTrigger';
import CellContextProvider from './context/CellContext';
import ModalContextProvider from './context/ModalContext';
import LargeInnerContextProvider from './context/LargeInnerContext';
import './stylesheets/index.scss';

function App() {
  return (
    <div className="App">
      <ModalContextProvider>
        <CellContextProvider>
          <LargeInnerContextProvider>
            <div className="wrapper">
              <h2>People</h2>
              <SmallCellFirst />
              <LargeCell />
              <SmallCell />
              <ModalTrigger />
            </div>
          </LargeInnerContextProvider>
        </CellContextProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;
