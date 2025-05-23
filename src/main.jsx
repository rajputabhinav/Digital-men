import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollProgressCircle from './components/ScrollProgressCircle.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ScrollProgressCircle/>
  </StrictMode>,
)
