import React, { useState, useEffect, useContext } from 'react';
import SplashScreen from '../animation/SplashScreen';
export default function LoadingState({ endLoading }) {


    return (
        <div>
          <SplashScreen endLoading={endLoading}/>
        </div>
    )
}
