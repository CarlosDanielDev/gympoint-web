import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/images/logo.png';

// import { Container } from './styles';

export default function SignIn() {
  function handleSubmit({ email, password }) {
    console.tron.log(email, password);
  }
  return (
    <>
      <img src={logo} alt="gympoint" />
      <Form onSubmit={handleSubmit} action="">
        <Input name="email" type="email" placeholder="seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha secreta"
        />

        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
