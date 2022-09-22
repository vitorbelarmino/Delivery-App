import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  padding: 50px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 150px;
    width: 150px;
  }
`;

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 350px;
  width: 350px;

  background-color: #f2fffc;
  padding: 0 20px 20px 20px;
  border: 1px solid #e5e5e5;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;

   input {
      height: 40px;
      border-radius: 0.25rem;
      border: 1px solid;
      padding: 0 10px;
    }
  }

  button {
    width: 100%;
    height: 40px;
    border: 1px solid;
    font-size: 1.5rem;

    border-radius: 0.25rem;
    color: #036b52;

    &:hover {
      cursor: pointer;
      color: #fff;
      background-color: #036b52;
    }
  }
`;
