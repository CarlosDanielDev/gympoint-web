import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '~/util/colors';

export const Container = styled.div`
  background: ${colors.backgroundForm};
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid ${colors.cinzaClaro};
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      &:nth-child(1) {
        margin-left: 30px;
      }
      margin-left: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const ItemLink = styled(NavLink)`
  font-weight: bold;
  color: ${colors.cinzaEscuro};
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid ${colors.cinzaClaro};

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${colors.name};
    }

    button {
      background: none !important;
      border: 0 !important;
      display: block !important;
      margin-top: 2px !important;
      font-size: 12px !important;
      color: ${colors.default} !important;
    }
  }
  button {
    background: #eee !important;
    color: #444 !important;
    border-radius: 50% !important;
    margin: 5px !important;
    padding: 3px;
    border: 0;
  }
`;
