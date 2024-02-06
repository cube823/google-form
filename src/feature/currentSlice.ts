import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CurrentSlice {
  currentIndex: number
}

const initialState: CurrentSlice = {
  currentIndex: -1,
}

const headerSlice = createSlice({
  name: 'currentSlice',
  initialState,
  reducers: {
    updateCurrentSlice: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload
    },
  },
})

export const { updateCurrentSlice } = headerSlice.actions

export default headerSlice.reducer
