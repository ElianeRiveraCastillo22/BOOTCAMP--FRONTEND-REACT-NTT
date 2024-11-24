import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import ApphookContainer from './AppHookContainer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApphookContainer />
  </StrictMode>,
)
