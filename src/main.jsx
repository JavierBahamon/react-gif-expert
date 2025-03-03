import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Gifexpertapp } from './gifexpertapp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gifexpertapp />
  </StrictMode>,
)

