import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { InputInterface } from './type'

interface HeaderSlice {
  title: InputInterface
  description: InputInterface
}

const initialState: HeaderSlice = {
  title: {
    type: 'Title',
    text: '제목 없는 설문지',
  },
  description: {
    type: 'Description',
    text: '',
  },
}

const headerSlice = createSlice({
  name: 'headerSlice',
  initialState,
  reducers: {
    updateHederTitle: (state, action: PayloadAction<string>) => {
      state.title.text = action.payload
    },
    updateHederDescription: (state, action: PayloadAction<string>) => {
      state.description.text = action.payload
    },
  },
})

export const { updateHederTitle, updateHederDescription } = headerSlice.actions

export default headerSlice.reducer
