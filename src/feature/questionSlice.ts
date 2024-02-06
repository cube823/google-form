import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { InputInterface, QuestionType } from './type'
import { v4 as uuidv4 } from 'uuid'

export interface Option {
  id: string
  text: string

  answerText?: string
  answerChecked: boolean
}

export interface QuestionSlice {
  id: string
  title: InputInterface
  questionType: QuestionType
  options: Option[]
  isRequired: boolean

  etcOption: {
    hasEtcOption: boolean
    text: string
    checked: boolean
  }

  answerText: string
}

export const initialQuestionState: QuestionSlice = {
  id: 'First Question Id',
  title: {
    type: 'Question',
    text: '질문',
  },
  questionType: 'multiple',
  options: [{ id: 'First Question Option Id', text: '옵션 1', answerChecked: false }],
  isRequired: false,
  etcOption: {
    hasEtcOption: false,
    text: '',
    checked: false,
  },

  answerText: '',
}

const questionSlice = createSlice({
  name: 'previewSlice',
  initialState: [initialQuestionState],
  reducers: {
    addQuestion: (state, action: PayloadAction<QuestionSlice>) => {
      state.push(action.payload)
    },

    updateQuestion: (state, action: PayloadAction<{ index: number; question: QuestionSlice }>) => {
      state[action.payload.index] = { ...state[action.payload.index], ...action.payload.question }
    },

    updateQuestionAnswer: (state, action: PayloadAction<{ index: number; text: string }>) => {
      state[action.payload.index].answerText = action.payload.text
    },

    removeQuestion: (state, action: PayloadAction<{ index: number }>) => {
      state.splice(action.payload.index, 1)
    },

    copyQuestion: (state, action: PayloadAction<{ index: number }>) => {
      const copiedQuestion = { ...state[action.payload.index], id: uuidv4() }
      state.splice(action.payload.index + 1, 0, copiedQuestion)
    },

    updateQuestionOption: (
      state,
      action: PayloadAction<{ index: number; optionIndex: number; text: string }>
    ) => {
      state[action.payload.index].options[action.payload.optionIndex].text = action.payload.text
    },

    updateQuestionOptionAnswerChecked: (
      state,
      action: PayloadAction<{ index: number; optionIndex: number; checked: boolean }>
    ) => {
      state[action.payload.index].options[action.payload.optionIndex].answerChecked =
        action.payload.checked
    },

    updateQuestionOptionAnswerText: (
      state,
      action: PayloadAction<{ index: number; optionIndex: number; text: string }>
    ) => {
      state[action.payload.index].options[action.payload.optionIndex].answerText =
        action.payload.text
    },

    addQuestionOption: (state, action: PayloadAction<{ index: number }>) => {
      state[action.payload.index].options.push({
        id: uuidv4(),
        text: `옵션 ${state[action.payload.index].options.length + 1}`,
        answerChecked: false,
      })
    },

    updateQuestionHasEtcOption: (
      state,
      action: PayloadAction<{ index: number; checked: boolean }>
    ) => {
      state[action.payload.index].etcOption.hasEtcOption = action.payload.checked
    },

    updateQuestionEtcOptionChecked: (
      state,
      action: PayloadAction<{ index: number; checked: boolean }>
    ) => {
      state[action.payload.index].etcOption.checked = action.payload.checked
    },

    updateQuestionEtcOptionText: (
      state,
      action: PayloadAction<{ index: number; text: string }>
    ) => {
      state[action.payload.index].etcOption.text = action.payload.text
    },

    removeQuestionOption: (
      state,
      action: PayloadAction<{ index: number; optionIndex: number }>
    ) => {
      if (state[action.payload.index].options.length === 1) return
      state[action.payload.index].options.splice(action.payload.optionIndex, 1)
    },

    updateQuestionOrder: (
      state,
      action: PayloadAction<{ sourceIndex: number; destinationIndex: number }>
    ) => {
      const newQuestionList = state.slice()
      const movingCard = newQuestionList.splice(action.payload.sourceIndex, 1)

      newQuestionList.splice(Number(action.payload.destinationIndex), 0, ...movingCard)
    },

    updateQuestionOptionOrder: (
      state,
      action: PayloadAction<{ index: number; sourceIndex: number; destinationIndex: number }>
    ) => {
      const newOptions = state[action.payload.index].options.slice()
      const movingOption = newOptions.splice(action.payload.sourceIndex, 1)

      newOptions.splice(action.payload.destinationIndex, 0, ...movingOption)
      state[action.payload.index].options = newOptions
    },

    removeAllForm: (state) => {
      for (let i = 0; i < state.length; i++) {
        state[i].answerText = ''
        state[i].options.forEach((option, j) => {
          state[i].options[j].answerChecked = false
          state[i].options[j].answerText = ''
        })
      }
    },
  },
})

export const {
  addQuestion,
  updateQuestion,
  updateQuestionAnswer,
  updateQuestionOrder,
  updateQuestionHasEtcOption,
  updateQuestionEtcOptionChecked,
  updateQuestionOptionOrder,
  addQuestionOption,
  updateQuestionOption,
  removeQuestion,
  removeQuestionOption,
  copyQuestion,
  updateQuestionEtcOptionText,
  updateQuestionOptionAnswerChecked,
  updateQuestionOptionAnswerText,
  removeAllForm,
} = questionSlice.actions

export default questionSlice.reducer
