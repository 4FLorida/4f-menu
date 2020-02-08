import styled, { css } from 'styled-components';


const Content = styled.div`
  margin-right: auto;
  margin-left: auto;
  display:flex;
  margin-bottom:10px;
  justify-content:flex-start;
  flex-wrap:wrap;

  width: 100%;
  
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 540px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 720px;
    display:flex;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1100px;
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