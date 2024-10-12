import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import FetchContextProvider from './context/FetchContext.jsx'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FetchContextProvider>
  </StrictMode>
)
