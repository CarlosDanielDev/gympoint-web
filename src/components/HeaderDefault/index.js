import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function HeaderDefault({ children }) {
  return (
    <div style={{ marginTop: '30px' }}>
      <Container>
        <>{children}</>
      </Container>
    </div>
  );
}

HeaderDefault.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HeaderDefault;
