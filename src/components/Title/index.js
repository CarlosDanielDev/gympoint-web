import React from 'react';
import PropTypes from 'prop-types';
import colors from '~/util/colors';

import { Container } from './styles';

function Title({ children }) {
  return (
    <Container colors={colors}>
      <>{children}</>
    </Container>
  );
}
Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
