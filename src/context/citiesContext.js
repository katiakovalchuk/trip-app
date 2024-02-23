import React, { createContext, useState } from 'react';

import { cities } from '../assets/mock/cities';

export const CitiesContext = createContext(null);

const CitiesContextProvider = ({ children }) => {
  const [citiesList, setCitiesList] = useState([...cities]);
  return (
    /* eslint-disable-next-line react/jsx-no-constructed-context-values */
    <CitiesContext.Provider value={{ citiesList, setCitiesList }}>
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesContextProvider;
