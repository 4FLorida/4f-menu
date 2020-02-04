import styled from 'styled-components';

const Searchbox = styled.input`
  height: 32px;
  width: 260px;
  border-radius: 20px;
  margin-right:26px;
  margin-top:1px;
  background: #ffffff;
  border: 1px solid #e0e0e0;

  :focus {
    outline: none;
    box-shadow: 0 0 0.1rem 0.5pt #007bff;
  }

  background-color: #ffffff;
  background-size: 16px;
  background-image: url('https://svgshare.com/i/Hfw.svg');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
`;

export default Searchbox;
