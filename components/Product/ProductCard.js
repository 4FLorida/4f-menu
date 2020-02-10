import styled from 'styled-components';

const ProductCard = styled.div`
  height: 70px;
  width:49.8%;
  margin-bottom:1px;
  margin-right:1px;
  ${({ checked }) =>
    checked
      ? `background-color:rgba(105, 121, 248, 0.2);`
      : `background-color:white`};
  display:flex;
  border:.5px solid lightgrey;
  transition:height 0.3s ease;

  @media (min-width: 480px) {
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width:100%;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width:49.6%;
  }
  @media (min-width: 1200px) {
  }

  &:hover { 
    -webkit-transform:translateY(3px);
    -ms-transform:translateY(3px);
    transform:translateY(3px);
    -webkit-transition:all .3s ease;
    transition:all .3s ease;
    z-index:2;
`;

export default ProductCard;
