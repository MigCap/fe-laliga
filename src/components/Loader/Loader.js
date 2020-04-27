import React from 'react';

import FallBackContainer from 'components/FallBackContainer/FallBackContainer';

import theme from 'styles/theme';

import './Loader.scss';

export const Loader = () => (
  <FallBackContainer
    bgColor={theme.global.colors.brand}
    justify="flex-start"
    alignContent="center"
    alignSelf="center"
    direction="column"
    margin="60vh auto 0 auto"
  >
    <div className="loader">Loading...</div>
  </FallBackContainer>
);

export default Loader;
