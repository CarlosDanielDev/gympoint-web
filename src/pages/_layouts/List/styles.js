import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  table {
    width: 100%;
    border-radius: 4px;
    margin-top: 10px;
    border-spacing: 0px;
    background: ${props => props.colors.backgroundForm};

    tr {
      th {
        color: #444;
        font-size: 19px;
        text-align: left;
        font-weight: bold;
        padding: 20px;
      }

      td {
        font-size: 16px;
        color: #666;
        padding: 20px;
        text-align: left;
        align-self: center;

        a {
          text-decoration: none;
        }

        button {
          border: 0;
          background: none;
        }

        .editar {
          font-size: 15px;
          color: #4d85ee;
          cursor: pointer;
        }
        .deletar {
          font-size: 15px;
          color: #de3b3b;
          cursor: pointer;
        }
      }
    }
    + tr td {
      border-top: 1px solid #eee;
    }
  }
`;
