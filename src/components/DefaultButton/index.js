import React from 'react';
import PropTypes from 'prop-types';
import colors from '~/util/colors';
import { ContainerButton } from './styles';

function DefaultButton({ children }) {
  return (
    <ContainerButton colors={colors}>
      <>{children}</>
    </ContainerButton>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultButton;
