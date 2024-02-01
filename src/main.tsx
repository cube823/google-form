import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyles from './style/globalCss'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Questionnaire from './pages/Questionnaire'
import Preview from './pages/Preview'
import Sheet from './pages/Sheet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Questionnaire />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='/sheet' element={<Sheet />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
