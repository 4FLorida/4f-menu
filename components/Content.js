import styled, { css } from 'styled-components';


const Content = styled.div`
  margin-right: auto;
  margin-left: auto;
  justify-content:space-between;
  display:flex;
  margin-bottom:10px;
  flex-wrap:wrap;
  @media (min-width: 480px) {
    width: auto;
    display:flex;
  }
  @media (min-width: 576px) {
    width: 540px;
    display:flex;
  }
  @media (min-width: 768px) {
    width: 720px;
    display:flex;
  }
  @media (min-width: 992px) {
    width: 960px;
    display:flex;
  }
  @media (min-width: 1200px) {
    width: 1100px;
    display:flex;
  }



  // * Props *
  ${props =>
    props.fluid &&
    css`
      box-sizing: border-box;
      min-width: 100%;
    `}
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`;

export default Content;