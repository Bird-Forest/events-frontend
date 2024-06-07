import styled from 'styled-components';

export const WrapHomePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
`;
export const WrapGoBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
  .back {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.11;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    padding: 0;
  }
`;
export const WrapPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
`;
