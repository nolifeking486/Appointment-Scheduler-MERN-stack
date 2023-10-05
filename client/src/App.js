import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import SearchForProf from './pages/SearchForProf';
import YourAppointments from './pages/YourAppointments';
import AdminAppointments from './pages/AdminAppointments';
import ActionCenter from './pages/ActionCenter';

function App() {
  const {loading} = useSelector(state => state.alerts);
  return (
    <>
      <BrowserRouter>
      {loading ? <Spinner/> :
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
        
        }/>
        <Route path='/login' element={
          <PublicRoute>
              <Login/>
          </PublicRoute>
        
        }/>
        <Route path='/register' element={
          <PublicRoute>
            <Register/>
          </PublicRoute>
        }/>
         <Route path='/SearchForProf' element={
          <ProtectedRoute>
            <SearchForProf/>
          </ProtectedRoute>
        
        }/>
        <Route path='/YourAppointments' element={
          <ProtectedRoute>
            <YourAppointments/>
          </ProtectedRoute>
        
        }/>
        <Route path='/AdminAppointments' element={
          <ProtectedRoute>
            <AdminAppointments/>
          </ProtectedRoute>
        
        }/>
        <Route path='/ActionCenter' element={
          <ProtectedRoute>
            <ActionCenter/>
          </ProtectedRoute>
        
        }/>
        
      </Routes>
      }
      
      </BrowserRouter>

    </>
  );
}

export default App;
