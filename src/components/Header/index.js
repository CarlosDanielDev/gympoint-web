import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/logo-header.png';
import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile, MenuLinks } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <ul>
            <li>
              <MenuLinks activeStyle={{ color: '#191920' }} to="/students">
                ALUNOS
              </MenuLinks>
            </li>
            <li>
              <MenuLinks activeStyle={{ color: '#191920' }} to="/plans">
                PLANOS
              </MenuLinks>
            </li>
            <li>
              <MenuLinks activeStyle={{ color: '#191920' }} to="/enrollments">
                MATRÍCULAS
              </MenuLinks>
            </li>
            <li>
              <MenuLinks activeStyle={{ color: '#191920' }} to="/help-orders">
                PEDIDOS DE AUXÍLIO
              </MenuLinks>
            </li>
          </ul>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
