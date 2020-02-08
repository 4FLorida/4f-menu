import styled from 'styled-components';

const ProductCardImage = styled.img`
  height: 60px;
  width: 15%;
  margin: 5px 1rem 5px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  ${({ src }) => `background-image:${src};`}
`;

export default ProductCardImage;
