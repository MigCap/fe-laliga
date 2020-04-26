import React, { memo } from 'react';
import { compose } from 'redux';

import './FlexContainer.scss';

export const FlexContainer = () => (
  <div>
    <h1>FlexContainer</h1>
  </div>
);

// FlexContainer.propTypes = {}

export default compose(memo)(FlexContainer);
