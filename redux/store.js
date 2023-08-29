import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from '../redux/toggle'



export const store = configureStore({
  reducer: {
    background: toggleReducer

  },
})