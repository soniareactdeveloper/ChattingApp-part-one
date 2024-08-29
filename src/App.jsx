import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ForgetPass from './Pages/ForgetPass';
import NotFound from './Pages/NotFound';
import RegisterPass from './Pages/RegisterPass';
import LayoutOne from './Layouts/LayoutOne';
import LoginPage from './Pages/LoginPage';  // Ensure this import is correct
import database from './firebase.config';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<HomePage />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/register" element={<RegisterPass />} />
        <Route path='/' element={<LayoutOne />}>
            <Route index element={<LoginPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
