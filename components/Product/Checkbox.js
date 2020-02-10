import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div``;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: relative;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  transition: all 150ms;
  border: 2px solid #d5d5d5;
  border-radius: 4px;

  ${HiddenCheckbox}:checked + & {
    background: #18a0fb;
    border-radius: 3px;
    border-color: #18a0fb;
    transform: translate3d(0, 0, 0) rotate(360deg);
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }

  &:hover {
    border-color: #18a0fb;
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <svg
          width="25"
          height="25"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 3.5L4 6.5L9.5 1"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <polyline points="4 11 8 15 16 6"></polyline>
        </svg>
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
