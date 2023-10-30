import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/User.jsx'
import MainRoutes from './Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
)
