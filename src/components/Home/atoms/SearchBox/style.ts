import styled from "@emotion/styled";

export const SearchBoxWrapper = styled.div`
  width: 400px;
  height: 40px;
  border: 1px solid #6263fb;
  border-radius: 24px;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 18px;

  input {
    width: 330px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000;
    background: none;
    font-weight: 500;
    font-size: 16px;
    border: none;
    transition: border, color 0.3s ease-in-out;
    ::placeholder {
      color: #bfbccc;
    }
  }
  svg {
    position: absolute;
    top: calc(50% - 12px);
    right: 12px;
    cursor: pointer;
  }
`;
