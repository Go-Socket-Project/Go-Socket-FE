import styled from "@emotion/styled";

export const ChatListWrapper = styled.div`
  width: 270px;
`;

export const ChatItem = styled.div`
  width: 100%;
  height: 32px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 16px;

  :hover {
    background: #f2f2f4;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
