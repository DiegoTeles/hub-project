import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ user, redirectPath = '/login', children }: any) => {
console.log('user :>> ', user);
console.log('redirectPath :>> ', redirectPath);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
