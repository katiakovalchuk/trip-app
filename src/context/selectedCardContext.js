import React, { createContext, useState } from 'react';

export const SelectedCardContext = createContext(null);

const SelectedCardContextProvider = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState('');
  const [selectedCardData, setSelectedCardData] = useState('');
  const [isDataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <SelectedCardContext.Provider
      /* eslint-disable-next-line react/jsx-no-constructed-context-values */
      value={{
        selectedCard,
        selectedCardData,
        setSelectedCard,
        setSelectedCardData,
        isDataLoading,
        setDataLoading,
        error,
        setError,
      }}
    >
      {children}
    </SelectedCardContext.Provider>
  );
};

export default SelectedCardContextProvider;
