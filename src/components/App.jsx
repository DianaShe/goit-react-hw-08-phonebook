
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import SharedLayout from './SharedLayout/SharedLayout';
// import Contacts from 'pages/Contacts';
// import Register from 'pages/Register';
// import LogIn from 'pages/LogIn';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { lazy } from 'react';

const Contacts = lazy(() => import ('pages/Contacts'))
const LogIn = lazy(() => import ('pages/LogIn'))
const Register = lazy(() => import('pages/Register'))

export function App () {
    return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/contacts' element={<PrivateRoute><Contacts/></PrivateRoute> }/>
          <Route path='/login' element={<PublicRoute><LogIn/></PublicRoute> }/>
          <Route path='/register' element={<PublicRoute><Register/></PublicRoute> }/>
        </Route>
      </Routes>
    );
  
}
