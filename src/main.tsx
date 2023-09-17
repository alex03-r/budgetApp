import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppContexProvider  } from "./Contex/AppContexProvider"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContexProvider /> 
  </React.StrictMode>,
)
