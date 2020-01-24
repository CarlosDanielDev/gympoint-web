import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function HeaderDefault({ children }) {
  return (
    <Container style={{ marginTop: '0px', marginBottom: '20px' }}>
      <>{children}</>
    </Container>
  );
}

HeaderDefault.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};

export default HeaderDefault;
