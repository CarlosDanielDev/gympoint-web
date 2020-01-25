import styled from 'styled-components';

export const ContainerButton = styled.button`
  background: ${props => props.colors.default};
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0 0;
  height: 33px;
  padding: 0 15px;
  color: ${props => props.colors.backgroundForm};
  text-align: center;
  text-transform: capitalize;

  svg {
    color: #fff;
    size: 2em;
    margin-right: 5px;
  }
`;
