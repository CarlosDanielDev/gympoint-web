import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  #back {
    background: #ccc;
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    margin: 5px;
    height: 33px;
    padding: 0 15px;
    text-align: center;
    text-transform: capitalize;

    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;

      svg {
        color: #FFF;
        size: 30px;
        margin-right: 5px;
      }
    }
  }
`;
