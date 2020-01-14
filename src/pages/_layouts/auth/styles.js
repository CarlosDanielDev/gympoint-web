import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: ${props => props.theme.default};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: ${props => props.colors.backgroundForm};
  border-radius: 4px;
  img {
    padding-top: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 30px;

    input {
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid ${props => props.colors.cinzaClaro};
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: ${props => props.colors.cinzaEscuro};
      margin: 0 0 10px;

      &::placeholder {
        color: ${props => props.colors.cinzaEscuro};
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${props => props.colors.default};
      font-weight: bold;
      color: ${props => props.colors.backgroundForm};
      border: 0;
      border-radius: 4px;
      font-size: 16px;
    }
  }
`;
