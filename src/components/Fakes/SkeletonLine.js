/**
 *
 * SkeletonLine
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const MySkeletonPulse = styled.div`
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 'none')};
  display: inline-block;
  height: ${(props) => (props.height ? props.height : '0.5rem')};
  width: ${(props) => (props.width ? props.width : '100%')};
  background: linear-gradient(-90deg, #81fced 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: ${(props) =>
    props.animation ? props.animation : 'pulse 3.2s ease-in-out infinite'};
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SkeletonLine = (props) => <MySkeletonPulse {...props} />;

SkeletonLine.propTypes = {};

export default SkeletonLine;
