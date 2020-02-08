import styled from 'styled-components';

const ProductCard = styled.div`
  height: 70px;
  width:49.8%;
  margin-bottom:1px;
  margin-right:1px;
  display:flex;
  background-color: white;
  border:0.5px solid lightgrey;


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
`;

export default ProductCard;
