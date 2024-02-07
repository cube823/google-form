import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { copyQuestion, removeQuestion } from './questionSlice'

interface CurrentSlice {
  currentIndex: number
}

const initialState: CurrentSlice = {
  currentIndex: -1,
}

const currentSlice = createSlice({
  name: 'currentSlice',
  initialState,
  reducers: {
    updateCurrentSlice: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(copyQuestion, (state) => {
      state.currentIndex += 1
    })

    builder.addCase(removeQuestion, (state) => {
      state.currentIndex -= 1
    })
  },
})

export const { updateCurrentSlice } = currentSlice.actions

export default currentSlice.reducer
