import styled from 'styled-components';

const Searchbox = styled.input`
  height: 32px;
  width: 83%;
  border-radius: 20px;
  margin-top: 1px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  margin-right: 10px;
  background-color: #ffffff;
  background-size: 16px;
  background-image: url('https://svgshare.com/i/Hfw.svg');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;

  &:focus {
    outline: none;
    filter:drop-shadow(0px 0px 5px lightgrey);
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 50%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 75%;
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: 80%;
  }
`;

export default Searchbox;
