import styled from "@emotion/styled";

export const ChatInputWrapper = styled.div`
  position: relative;
  height: 48px;
  width: calc(100% - 18px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  label {
    width: 100%;

    p {
      position: absolute;
      left: 24px;
      top: 1px;
      background: #fff;
      padding: 0 5px;
      font-size: 14px;
    }
    :focus-within svg {
      path {
        fill: #6263fb;
      }
    }
  }

  input {
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #f2f2f4;
    color: #000;
    font-weight: 500;
    font-size: 17px;
    text-align: left;
    border: none;
    border-radius: 16px;
    padding-left: 24px;

    ::placeholder {
      color: #bfbccc;
      font-size: 17px;
      font-weight: 500;
    }
  }

  svg {
    position: absolute;
    top: calc(50% - 12px);
    right: 0px;
    cursor: pointer;
  }
`;
