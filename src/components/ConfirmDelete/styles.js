import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    width: 100%;
    font-weight: bold;
    color: #444;
    line-height: 24px;
  }

  div {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      border: 0;
      padding: 2px;
      margin: 5px;
      border-radius: 4px;
      width: 50%;
    }
    .delete {
      background: #e14747;
      color: #fff;
    }

    .noDelete {
      background: #ccc;
      color: #fff;
    }
  }
`;
