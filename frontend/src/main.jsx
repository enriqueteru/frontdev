import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import MainRoutes from '@router/Main.route';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
)
