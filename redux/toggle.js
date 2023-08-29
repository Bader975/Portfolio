import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   showOrHideBg: false,
// }

export const toggleSlice = createSlice({
  name: 'background',
  initialState: {
    backgroundMode: false,
  },
  reducers: {
    toggleBG: (state) => {
      state.backgroundMode = !state.backgroundMode
    },
  },



})


export const { toggleBG } = toggleSlice.actions

export default toggleSlice.reducer