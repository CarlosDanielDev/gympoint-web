import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import CircleLoader from 'react-spinners/CircleLoader';
import { useTranslation } from 'react-i18next';
import logo from '~/assets/images/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';
import { Languages } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <img src={logo} alt="gympoint" />

      <Form schema={schema} onSubmit={handleSubmit} action="">
        <Input
          name="email"
          type="email"
          placeholder={t('signin.form.placeholders.email')}
        />
        <Input
          name="password"
          type="password"
          placeholder={t('signin.form.placeholders.senha')}
        />

        <button type="submit">
          {loading ? (
            <center>
              <CircleLoader size={25} color="#fff" loading />
            </center>
          ) : (
            t(t('signin.form.buttonName'))
          )}
        </button>
        <Languages>
          <button type="button" onClick={() => handleLanguage('pt')}>
            PT
          </button>
          <button type="button" onClick={() => handleLanguage('en')}>
            EN
          </button>
        </Languages>
      </Form>
    </>
  );
}
