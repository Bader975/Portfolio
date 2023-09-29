import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';



export default function Layout({ children }) {
 
  return (
    <>
      
          {/* <NavBar /> */}
          <>
          {children}
          </>
      
    </>
  );
}