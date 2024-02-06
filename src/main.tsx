import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyles from './style/globalCss'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Forms from './pages/Forms'
import FormResponse from './pages/FormResponse'
import ViewForm from './pages/ViewForm'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Forms />} />
            <Route path='/viewForm' element={<ViewForm />} />
            <Route path='/formResponse' element={<FormResponse />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
)
