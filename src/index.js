import React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = document.getElementById('root')

const ReactRoot = ReactDOM.createRoot(root)

ReactRoot.render(<App />)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
