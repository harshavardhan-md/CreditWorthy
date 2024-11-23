import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react';
import { config } from './config'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={config.clerkKey}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)