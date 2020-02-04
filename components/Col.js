import styled from 'styled-components';

function getWidth(span) {
  if (!span) return `width:100%`;
  const width = (span / 12) * 100;
  return `width: ${width}%;`;
}

const Col = styled.div`
  ${({ xs }) => (xs ? getWidth(xs) : 'width: 100%')};
  @media only screen and (min-width: < 768px) {
    ${({ sm }) => sm && getWidth(sm)};
  }
  
  @media only screen and (max-width: 992px && min-width: 992px) {
    ${({ md }) => md && getWidth(md)};
  }
  @media only screen and (max-width: 1200px && min-width: 1200px) {
    ${({ lg }) => lg && getWidth(lg)};
  }
  @media only screen and (max-width: 576px && min-width: 576px) {
    width: 500px;
  }
`;

export default Col;
