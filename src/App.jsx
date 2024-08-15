import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ForgetPass from './Pages/ForgetPass'
import NotFound from './Pages/NotFound'
import RegisterPass from './Pages/RegisterPass'
import database from './firebase.config'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<HomePage/>}/>
        <Route path ='/forgetpass' element={<ForgetPass/>}/>
        <Route path='/register' element={<RegisterPass/>}/>
        <Route path='*' element={<NotFound/>}/>
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
