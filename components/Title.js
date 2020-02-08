import styled from 'styled-components';

const Title = styled.span`


font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 40px;

text-transform: uppercase;
color: #030000;

@media (min-width: 992px) and (max-width: 1199.98px) {
  margin-right:3px;
}


${({color}) => `color:${color};`}
${({lineHeight}) => `line-height:${lineHeight};`}
${({marginRight}) => `margin-right:${marginRight};`}
${({float}) => `float:${float};`}
${({transform}) => `text-transform:${transform}`}
`;


export default Title;