import styled from 'styled-components';

export default styled.h1`
  color: ${(props) => (props.color ? props.color : 'white')};
  margin: 10px;
  padding: 10px;
`;
