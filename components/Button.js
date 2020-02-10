import styled, { css } from 'styled-components';

const Button = styled.button`
  border-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  margin-top: 1px;
  margin-right: 1px;
  float: right;
  font-size: 25px;
  color: #ffffff;
  text-align: center;

  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 36px;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 36px;
  }

  ${props =>
    props.create &&
    css`
      background-color: #ff334b;
      border: 1px solid #ff334b;
      height: 36px;
      width: 36px;
      @media (min-width: 992px) and (max-width: 1199.98px) {
        width: 36px;
      }
    `};
  ${props =>
    props.cancel &&
    css`
      padding: 0;
      border: 2px solid #e24c4c;
      border-radius: 4px;
      color: #e24c4c;
      height: 32px;
      width: 54px;
    `}
  ${props =>
    props.save &&
    css`
      background-color: #109cf1;
      border-radius: 4px;
      height: 32px;
      width: 82px;
    `}
`;
export default Button;
