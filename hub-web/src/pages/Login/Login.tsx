import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { ContainerLogin, LoginBox, SideBox, Typography, Form } from './styles';
import { useNavigate } from 'react-router-dom';

import { authRequest } from '../../store/duck/auth/actions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth }: any = useSelector((state) => state);

  const [userData, setUserData] = useState<any>({ email: '', password: '' });

  const handleChangeLogin = (e: any) => {
    const { name, value } = e.target;

    setUserData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleClickSubmit = (e: any) => {
    e.preventDefault();

    dispatch(authRequest(userData));
    navigate('/dashboard');
    /* window.location.replace('localhost:3000/dashboard') */
  };

  return (
    <>
      <ContainerLogin>
        <SideBox>ss</SideBox>
        <SideBox>
          <LoginBox>
            <Typography>Login</Typography>

            <Form>
              <input name='email' onChange={handleChangeLogin} />
              <input
                name='password'
                type={'password'}
                onChange={handleChangeLogin}
              />
              <button onClick={handleClickSubmit}>Entrar</button>
            </Form>
          </LoginBox>
        </SideBox>
      </ContainerLogin>
    </>
  );
}

export default Login;
