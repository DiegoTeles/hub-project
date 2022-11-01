import styled from 'styled-components';

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  height: 100%;
`;

export const SideBox = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid;
  width: 100%;
  align-items: center;
`;

export const LoginBox = styled.div`
  max-width: 300px;
  min-width: 300px;
  min-height: 300px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dfdbdb;
  border-radius: 8px;
`;

export const Typography = styled.h1`
  margin: 0 0 20px;
`;

export const Form = styled.div`
  display: grid;
  justify-content: center;
  gap: 14px;
  width: 250px;

  input {
    padding: 8px;
    font-size: 16px;
    border-width: 1px;
    border-color: #cccccc;
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: 14px;
    text-shadow: 0px 0px 0px rgba(66, 66, 66, 0.75);
  }

  input:focus {
    outline: none;
  }

  button {
    background-color: #44c767;
    border-radius: 28px;
    border: 1px solid #18ab29;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 17px;
    padding: 7px 14px;
    font-weight: 600;
  }
  button:hover {
    background-color: #5cbf2a;
  }

  button:active {
    position: relative;
    top: 1px;
  }
`;
