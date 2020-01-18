import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import CircleLoader from 'react-spinners/CircleLoader';
import logo from '~/assets/images/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="gympoint" />

      <Form schema={schema} onSubmit={handleSubmit} action="">
        <Input name="email" type="email" placeholder="seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua Senha secreta"
        />

        <button type="submit">
          {loading ? (
            <center>
              <CircleLoader size={25} color="#fff" loading />
            </center>
          ) : (
            'Acessar'
          )}
        </button>
      </Form>
    </>
  );
}
