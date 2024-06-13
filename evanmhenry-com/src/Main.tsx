import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import BrowserRouter from './components/navigation/BrowserRouter.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={BrowserRouter} />)
