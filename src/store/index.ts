import { useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import headerReducer from '../feature/headerSlice'
import questionReducer from '../feature/questionSlice'
import currentReducer from '../feature/currentSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  headerReducer,
  questionReducer,
  currentReducer,
})

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['headerReducer', 'questionReducer', 'currentReducer'],
}

const reducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = <T>(
  selector: (state: RootState) => T,
  equalityFn?: (left: T, right: T) => boolean
) => useSelector(selector, equalityFn)

export const useAppDispatch = useDispatch
