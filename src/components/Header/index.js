import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import logo from '~/assets/images/logo-header.png';
import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile, ItemLink } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation();

  function handleSignOut() {
    dispatch(signOut());
  }
  function handleChange(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <ul>
            <li>
              <ItemLink activeStyle={{ color: '#191920' }} to="/students">
                {t('header.1')}
              </ItemLink>
            </li>
            <li>
              <ItemLink activeStyle={{ color: '#191920' }} to="/plans">
                {t('header.2')}
              </ItemLink>
            </li>
            <li>
              <ItemLink activeStyle={{ color: '#191920' }} to="/enrollments">
                {t('header.3')}
              </ItemLink>
            </li>
            <li>
              <ItemLink activeStyle={{ color: '#191920' }} to="/help-orders">
                {t('header.4')}
              </ItemLink>
            </li>
          </ul>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                {t('header.sair')}
              </button>
            </div>
            <button type="button" onClick={() => handleChange('pt')}>
              PT
            </button>
            <button type="button" onClick={() => handleChange('en')}>
              EN
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
