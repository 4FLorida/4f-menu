import styled, { css } from 'styled-components';

const Row = styled.div`
margin-bottom:8px;
margin-left:auto;
margin-right:auto;
margin-top:10px;
display:flex;
@media (min-width: 480px) {
  width: auto;
}
@media (min-width: 576px) {
  width: 540px;
}
@media (min-width: 768px) {
  width: 720px;
}
@media (min-width: 992px) {
  width: 960px;
}
@media (min-width: 1200px) {
  width: 1100px;
  display:flex;
}




// * Props *
${props =>
  props.center &&
  css`
    text-align: center;
    display: block;
  `}
`;

export default Row;