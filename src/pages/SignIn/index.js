import React from 'react';
import logo from '~/assets/images/logo.png';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="gympoint" />
      <form action="">
        <input type="email" placeholder="seu e-mail" />
        <input placeholder="Sua Senha secreta" />

        <button type="submit">Acessar</button>
      </form>
    </>
  );
}
