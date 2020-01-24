import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function ConfirmDelete({ children }) {
  return (
    <Container>
      <>{children}</>
    </Container>
  );
}
ConfirmDelete.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ConfirmDelete;
