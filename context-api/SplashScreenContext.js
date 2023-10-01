import React, { createContext, useState, useEffect } from 'react';

export const SplashScreenContext = createContext();

export const SplashScreenProvider = ({ children }) => {
  const [splashScreenShown, setSplashScreenShown] = useState(false);

  useEffect(() => {
    // Retrieve state from local storage on component mount
    const savedState = localStorage.getItem('splashScreenShown');
    if (savedState) {
      setSplashScreenShown(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    // Save state to local storage whenever it changes
    localStorage.setItem('splashScreenShown', JSON.stringify(splashScreenShown));
  }, [splashScreenShown]);

  const updateSplashScreenShown = () => {
    setSplashScreenShown(true);
  };

  return (
    <SplashScreenContext.Provider value={{ splashScreenShown, updateSplashScreenShown }}>
      {children}
    </SplashScreenContext.Provider>
  );
};