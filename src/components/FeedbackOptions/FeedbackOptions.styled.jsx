import styled from '@emotion/styled';

export const WrapperBtn = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  width: 80px;
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;

  overflow: hidden;
  color: #333;
  background-color: rgb(227, 227, 227);
  border: 1px solid rgb(193, 193, 193);
  border-radius: 4px;
  transition: all 0.45s ease-Out;

  :hover {
    background-color: rgba(185, 183, 240, 0.8);
    box-shadow: inset rgb(158, 158, 158) 0px 0px 16px 2px;
  }
`;
