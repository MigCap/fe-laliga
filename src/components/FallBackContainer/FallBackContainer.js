import styled from 'styled-components';

export default styled.div`
  width: ${(props) => (props.width ? props.width : 'auto')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  flex-direction: ${(props) => (props.direction ? props.direction : '')};
  justify-content: ${(props) => (props.justify ? props.justify : '')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : '')};
  align-content: ${(props) => (props.alignContent ? props.alignContent : '')};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : '')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '')};
  height: 100vh;
`;
