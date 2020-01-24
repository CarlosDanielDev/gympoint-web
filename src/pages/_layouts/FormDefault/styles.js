import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  margin-top: 30px;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  flex-direction: column;
  border-radius: 4px;

  form {
    #form {
      display: flex;
      flex-direction: column;
      padding: 20px;
      background: #fff !important;
      border-radius: 4px;

      label {
        color: #444;
        line-height: 33px;
        font-weight: bold;
        font-size: 16px;
      }

      input {
        width: 100%;
        background: rgba(255, 255, 255, 0.5);
        border: 1px solid ${props => props.colors.cinzaClaro};
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: ${props => props.colors.cinzaEscuro};
        margin: 0 0 10;

        &::placeholder {
          color: ${props => props.colors.cinzaEscuro};
        }
      }

      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
