import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyles from './style/globalCss'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Forms from './pages/Forms'
import FormResponse from './pages/FormResponse'
import ViewForm from './pages/ViewForm'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Forms />} />
          <Route path='/viewForm' element={<ViewForm />} />
          <Route path='/formResponse' element={<FormResponse />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
