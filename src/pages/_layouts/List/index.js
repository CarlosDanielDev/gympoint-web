import React from 'react';
import PropTypes from 'prop-types';
import colors from '~/util/colors';
import { Wrapper, Content } from './styles';

function List({ children }) {
  return (
    <Wrapper>
      <Content colors={colors}>{children}</Content>
    </Wrapper>
  );
}
List.propTypes = {
  children: PropTypes.element.isRequired,
};

export default List;
