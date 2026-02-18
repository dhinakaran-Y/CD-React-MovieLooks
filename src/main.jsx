import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TheHeader from './assets/components/TheHeader'
import TheHero from './assets/components/TheHero'
import TheFooter from './assets/components/TheFooter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TheHeader/>
    <TheHero/>
    {/* <TheFooter/> */}
  </StrictMode>,
)
