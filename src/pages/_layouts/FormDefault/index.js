import React from 'react';
import PropTypes from 'prop-types';
import colors from '~/util/colors';
import { Wrapper, Content } from './styles';
// import { Container } from './styles';

function FormDefault({ children }) {
  return (
    <Wrapper>
      <Content colors={colors}>{children}</Content>
    </Wrapper>
  );
}
FormDefault.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FormDefault;
