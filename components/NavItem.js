import styled, { css } from 'styled-components';

const NavItem = styled.div`
  height: 70px;
  width: 70px;
  text-align: center;
  position: relative;
  margin-right: 46px;
  top:30%;
  background-color: #ff334b;
  border-radius: 50%;

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  :nth-child(n+3) > svg {
    top:60%;
  }

  :nth-child(6) {
    margin-right:0px;
  }
`;

export default NavItem;
