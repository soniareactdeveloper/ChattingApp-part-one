import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ForgetPass from './Pages/ForgetPass'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<HomePage/>}/>
        <Route path ='/forgetpass' element={<ForgetPass/>}/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={route} />
    </>
  )
}

export default App
