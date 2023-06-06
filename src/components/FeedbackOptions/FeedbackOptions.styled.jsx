import styled from '@emotion/styled';

export const WrapperBtn = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  width: 80px;
  padding: 5px;
  text-transform: capitalize;
  cursor: pointer;

  overflow: hidden;
  color: #333;
  background-color: rgb(227, 227, 227);
  border: 1px solid rgb(193, 193, 193);
  border-radius: 4px;
  transition: all 0.45s ease-Out;

  :hover,
  :focus {
    background-color: rgba(185, 183, 240, 0.8);
    /* box-shadow: rgb(158, 158, 158) 0px 4px 10px 4px; */
  }
`;
