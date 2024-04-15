import styled from "@emotion/styled";

export const AuthWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #f0f4f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 1200px;
  height: 480px;
  min-height: 384px;
  background: #ffffff;
  border-radius: 28px;
  padding: 132px 56px 48px;
  div {
    display: flex;
    flex: 1 1 auto;
    flex-grow: 1;
    flex-wrap: wrap;
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin: -72px 0px 0px;
`;

export const Logo = styled.div``;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  h1 {
    font-weight: 500;
    margin-top: 1.5rem;
  }
  div {
    font-weight: 400;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const TextFieldWrapper = styled.div`
  padding-left: 24px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
`;

export const FooterButtonWrapper = styled.div`
  width: 100%;
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-size: 14px;
    color: #4783ea;
    text-decoration: none;
  }
`;
