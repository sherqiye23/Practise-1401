import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import ROUTES from './routers/router'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = createBrowserRouter(ROUTES)

  return <RouterProvider router={router}></RouterProvider>
}

export default App
