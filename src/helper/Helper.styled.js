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
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #b2ebf2;

  .empty-title {
    z-index: 1;
    font-size: 32px;
    color: #00838f;
    font-weight: 500;
    margin-top: 100px;
  }
  .icon-empty {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
    fill: #80deea;
  }
`;
