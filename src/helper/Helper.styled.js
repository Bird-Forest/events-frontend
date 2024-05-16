import styled from 'styled-components';

export const WrapLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: rgba(189, 189, 189, 0.5);
`;
export const WrapEmpty = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 40px;
  .empty-title {
    font-size: clamp(1rem, 0.636rem + 1.82vw, 2rem);
    color: green;
    font-weight: 500;
  }
  .icon-empty {
    width: 240px;
    height: 320px;
    fill: red;
  }
`;
