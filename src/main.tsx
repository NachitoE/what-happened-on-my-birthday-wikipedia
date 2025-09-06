import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout'
import './index.css'

function App() {
  return (
    <Layout>
      <h1 className="text-5xl font-bold justify-center-safe text-center font-cosette-titre">What happened on my birthdate?</h1>
      <div className="flex justify-center mt-4">
        
      </div>
    </Layout>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)