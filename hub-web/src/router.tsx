import Cookies from 'js-cookie';
import { FC, useEffect, useState } from 'react';
import {
  Route,
  Routes as Switch,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
//import Layout from './template/Layout';
import { Dashboard, Login } from './pages';
import { ROUTES } from './constants';
import { useDispatch } from 'react-redux';
import ProtectedRoute from './Protect/Private';

//import { updateAuthentication } from './store/Saga/application/action';

const Router: FC = () => {
  const [user, setUser] = useState<any>(null);
  const [gettingUser, isGettingUser] = useState(true);

  const handleLogin = () => {
    const token = Cookies.get('token');
    if (token) {
      setUser(token);
      isGettingUser(false);
    } else {
      isGettingUser(false);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  console.log('gettingUser :>> ', gettingUser);
  return (
    <BrowserRouter>
      <Switch>
        {!gettingUser ? (
          <>
            <Route index path={ROUTES.AUTH} element={<Login />} />
            <Route
              path={ROUTES.DASHBOARD}
              element={
                <ProtectedRoute user={user}>
                  <Dashboard />
                </ProtectedRoute>
              }
            ></Route>
          </>
        ) : (
          <Route
            path={ROUTES.AUTH}
            element={
              <Dashboard />
            }
          />
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
