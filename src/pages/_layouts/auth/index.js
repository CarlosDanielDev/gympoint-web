import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';
import colors from '~/util/colors';
// import colors from '../../../util/colors';
export default function AuthLayout({ children }) {
  return (
    <Wrapper theme={colors}>
      <Content colors={colors}>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
