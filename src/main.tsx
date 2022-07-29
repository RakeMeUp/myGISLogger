import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { DataContextProvider } from './contexts/dataContext'
import { VarContextProvider } from './contexts/varContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <VarContextProvider>
          <App />
        </VarContextProvider>
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
