import styled from "@emotion/styled";

export const DMBoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 12px 12px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`;

export const HeaderWrapper = styled.section`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 16px;
  border-bottom: 2px solid #bfbccc;

  span {
    font-size: 22px;
    font-weight: 800;
    color: #15114d;
  }
`;

export const ChatBoard = styled.div`
  width: 100%;
  height: 100%;
  max-height: calc(100% - 96px);
  overflow-y: scroll;
  padding: 16px;
`;

export const ChatItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0 56px;
  margin-top: 17px;
  gap: 4px;
`;

export const ChatUserProfile = styled.div`
  position: absolute;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c1e7fe;
`;

export const ChatUserName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #15114d;
`;

export const ChatText = styled.div`
  display: flex;

  span {
    font-size: 16px;
    font-weight: 500;
    color: #15114d;
    background-color: #f2f2f4;
    padding: 8px 16px;
    border-radius: 0 16px 16px;
  }
`;
