import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css';
import '@/assets/scss/style.scss';
import { RouterProvider } from "react-router-dom";
import router from "@/router/router.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
