import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CustomModalContainer } from './components/CustomModalContainer/Container'
import { ToastContainer } from './components/Toast/Container'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
  <React.StrictMode>
    <App />
    <CustomModalContainer/>
    <ToastContainer/>
  </React.StrictMode>
  </>,
)
