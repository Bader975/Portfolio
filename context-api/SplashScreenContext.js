import React, { createContext, useState } from 'react';

export const SplashScreenContext = createContext();

export const SplashScreenProvider = ({ children }) => {
  const [splashScreenShown, setSplashScreenShown] = useState(false);

  const updateSplashScreenShown = () => {
    setSplashScreenShown(true);
  };

  return (
    <SplashScreenContext.Provider value={{ splashScreenShown, updateSplashScreenShown }}>
      {children}
    </SplashScreenContext.Provider>
  );
};