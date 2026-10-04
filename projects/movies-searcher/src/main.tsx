import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './global.css'

// biome-ignore lint/style/noNonNullAssertion: Explanation in React 18
createRoot(document.getElementById('root')!).render(<App />)
