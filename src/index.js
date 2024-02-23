import React from 'react';
import ReactDOM from 'react-dom/client';

import CardContextProvider from './context/cardContext';
import CitiesContextProvider from './context/citiesContext';
import App from './App';

import './index.css';
import SelectedCardContextProvider from './context/selectedCardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SelectedCardContextProvider>
      <CardContextProvider>
        <CitiesContextProvider>
          <App />
        </CitiesContextProvider>
      </CardContextProvider>
    </SelectedCardContextProvider>
  </React.StrictMode>,
);
