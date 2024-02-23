import React, { useContext, useState } from 'react';

import CardList from './Components/Shared/CardList';
import SideBar from './Components/Shared/SideBar';

import { SelectedCardContext } from './context/selectedCardContext';

import './App.css';

const App = () => {
  const { selectedCard, isDataLoading } = useContext(SelectedCardContext);

  return (
    <div className="main-page" style={{ padding: '30px' }}>
      <div className="main-content">
        <div>
          <h1>
            <span style={{ fontWeight: 'normal' }}>Weather </span>
            Forecast
          </h1>
        </div>
        <CardList />
      </div>
      {selectedCard && isDataLoading && <div>Loading...</div>}
      {selectedCard && !isDataLoading && <SideBar />}
    </div>
  );
};

export default App;
