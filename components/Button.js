import styled, { css } from 'styled-components';

const Button = styled.button`
  border-color: transparent;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: 0.55rem;
  margin-top:2px;
  font-weight: 500;
  font-family:Poppins;
  font-style:SemiBold;
  font-size: 16px;
  color: #ffffff;
  :focus {
    outline: none;
  }

  text-align: center;

  ${props =>
    props.create &&
    css`
      background-color: #ff334b;
      border: 1px solid #ff334b;
      height: 32px;
      width: 160px;
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
