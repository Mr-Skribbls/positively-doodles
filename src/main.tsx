import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AnimalDetailsProvider } from './contexts/animalDetails/animalDetails.provider';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimalDetailsProvider>
      <App />
    </AnimalDetailsProvider>
  </React.StrictMode>,
)