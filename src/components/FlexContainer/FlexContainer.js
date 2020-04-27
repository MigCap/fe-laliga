import styled from 'styled-components';

export default styled.div`
  width: ${(props) => (props.width ? props.width : 'auto')};
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  align-content: ${(props) => (props.alignContent ? props.alignContent : 'center')};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'center')};
  margin: ${(props) => (props.margin ? props.margin : 'auto')};
  padding: ${(props) => (props.padding ? props.padding : 'auto')};
`;
