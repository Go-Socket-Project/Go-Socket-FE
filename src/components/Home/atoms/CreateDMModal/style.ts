import styled from "@emotion/styled";

export const Layer = styled.div`
  position: absolute;
  width: 440px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: #ffffff;
  z-index: 3;
`;

export const ModalTitle = styled.div`
  position: relative;
  width: 100%;
  padding: 24px 24px 0;
  text-align: center;
  p {
    font-size: 24px;
    font-weight: 700;
  }
  svg {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

export const ModalField = styled.div`
  width: 100%;
  padding: 16px;
  margin: 20px 0;

  input {
    width: calc(100% - 22px);
    height: 28px;
    padding: 10px;
    font-size: 16px;
    background: #00000014;
    border: none;
    border-radius: 8px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  padding: 16px;
  background: #f2f2f4;
  border-radius: 0 0 4px 4px;
`;

export const ModalButton = styled.button`
  padding: 12px 29px;
  background: #6263fb;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  border: none;
  display: flex;
  margin-left: auto;
`;
