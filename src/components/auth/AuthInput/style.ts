import styled from "@emotion/styled";

export const AuthInput = styled.div`
  position: relative;
  height: 55px;
  width: calc(100% - 18px);
  display: flex;
  justify-content: center;
  align-items: center;

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
    :focus-within p {
      color: #4783ea;
    }
  }

  input {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #fff;
    color: #000;
    font-weight: 500;
    font-size: 17px;
    text-align: left;
    border: 1px solid #000;
    border-radius: 8px;
    padding-left: 14px;

    :focus {
      border: 1px solid #4783ea;
    }
  }

  svg {
    position: absolute;
    top: calc(50% - 9px);
    right: 0px;
    cursor: pointer;
  }
`;
