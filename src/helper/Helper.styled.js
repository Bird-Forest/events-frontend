import styled from 'styled-components';

export const WrapLoading = styled.div`
  z-index: 4;
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
export const Loader = styled.span`
  position: absolute;
  top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 175px;
  height: 80px;
  display: block;
  margin: auto;
  background-image: radial-gradient(
      circle 25px at 25px 25px,
      #fff 100%,
      transparent 0
    ),
    radial-gradient(circle 50px at 50px 50px, #fff 100%, transparent 0),
    radial-gradient(circle 25px at 25px 25px, #fff 100%, transparent 0),
    linear-gradient(#fff 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;

  &::before {
    content: '';
    left: 60px;
    bottom: 18px;
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #2373a9;
    background-image: radial-gradient(
        circle 8px at 18px 18px,
        #fff 100%,
        transparent 0
      ),
      radial-gradient(circle 4px at 18px 0px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 0px 18px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 36px 18px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 18px 36px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 30px 5px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 30px 30px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 5px 30px, #fff 100%, transparent 0),
      radial-gradient(circle 4px at 5px 5px, #fff 100%, transparent 0);
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 3s linear infinite;
  }
  &::after {
    content: '';
    left: 94px;
    bottom: 15px;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #2373a9;
    background-image: radial-gradient(
        circle 5px at 12px 12px,
        #fff 100%,
        transparent 0
      ),
      radial-gradient(circle 2.5px at 12px 0px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 0px 12px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 24px 12px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 12px 24px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 20px 3px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 20px 20px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 3px 20px, #fff 100%, transparent 0),
      radial-gradient(circle 2.5px at 3px 3px, #fff 100%, transparent 0);
    background-repeat: no-repeat;
    box-sizing: border-box;
    animation: rotationBack 4s linear infinite reverse;
  }

  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const WrapEmpty = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  .empty-title {
    z-index: 1;
    font-size: 32px;
    color: #fffde7;
    font-weight: 500;
    margin-top: 100px;
  }
`;
export const WrapNotif = styled.div`
  top: 124px;
  z-index: 1;
  position: absolute;
  display: flex;
  align-items: center;
  width: 240px;
  height: 40px;
  background-color: #fffde7;
  border-radius: 16px;
  padding: 12px;
  margin: 0 auto;
  .icon-notif {
    width: 40px;
    height: 40px;
    fill: #ffb74d;
  }
  .text-notif {
    display: grid;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: #01579b;
    padding: 0;
  }
`;
