import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import ROUTES from './routers/router'

function App() {
  const router = createBrowserRouter(ROUTES)

  return <RouterProvider router={router}></RouterProvider>
}

export default App
