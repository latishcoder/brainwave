import { StrictMode } from 'react'
// import { createRoot from 'react-dom/client'
import ReactDom from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
