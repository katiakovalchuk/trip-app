import React, { createContext, useState } from 'react';

import { initialCity } from '../assets/mock/cities';

export const CardContext = createContext(null);

const CardContextProvider = ({ children }) => {
  const [cardList, setCardList] = useState([initialCity]);
  /* eslint-disable-next-line react/jsx-no-constructed-context-values */
  return <CardContext.Provider value={{ cardList, setCardList }}>{children}</CardContext.Provider>;
};

export default CardContextProvider;
