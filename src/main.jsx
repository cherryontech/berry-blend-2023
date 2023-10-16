import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from "./routes/route";
import ErrorPage from "./error-page";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
