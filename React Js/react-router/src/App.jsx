import './App.css'
import Navbbar from './component/Navbbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbbar /> <Home /></>
    },
    {
      path: "/about",
      element: <><Navbbar /> <About /></>
    },
    {
      path: "/contact",
      element: <><Navbbar /> <Contact /></>
    },

  ])
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
