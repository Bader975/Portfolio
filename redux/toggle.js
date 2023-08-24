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
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.backgroundMode = !state.backgroundMode
    },

  },
})

// Action creators are generated for each case reducer function
export const { toggleBG } = toggleSlice.actions

export default toggleSlice.reducer