import styled from 'styled-components';

export const FilterBar = styled.div`
  top: 0;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: fit-content;
  width: 100%;
  padding: 8px;
  margin: 0 auto;
  @media only screen and (min-width: 1100px) {
    justify-content: center;
    align-items: center;
    height: fit-content;
    gap: 20px;
    padding: 20px 0 10px 0;
  }
`;
// ** MOBILE **
export const BtnMobile = styled.button`
  display: block;
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  border: none;
  outline: transparent;
  background-color: transparent;
  cursor: pointer;
  .icon-filter {
    fill: #ffffff;
    width: 36px;
    height: 36px;
  }
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;
export const FilterVisual = styled.div`
  position: absolute;
  top: 52px;
  display: none;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);
  background-color: rgb(153, 187, 255, 0.5);
  padding: 16px 0;
  @media only screen and (min-width: 1100px) {
    position: relative;
    top: 0;
    display: block;
    width: min-content;
    height: auto;
    padding: 0;
    backdrop-filter: blur(0);
    background-color: transparent;
  }
`;
export const WrapFilter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0;
  margin: 0 auto;
  @media only screen and (min-width: 1100px) {
    flex-direction: row;
  }

  /* @media only screen and (min-width: 1449px) {
    flex-direction: row;
  } */
`;
// ** CATEGORY **
export const WrapCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0 auto;
  @media only screen and (min-width: 1100px) {
    flex-direction: row;
  }
`;
export const WrapSelect = styled.div`
  position: relative;
  display: flex;
  width: 208px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 14px;
  background: #fffde7;
  padding: 8px 12px;
`;
export const SelectText = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 152px;
  height: 24px;
  outline: #fffde7;
  border: none;
  background-color: #fffde7;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.11;
  text-align: left;
  color: #01579b;
  &::placeholder {
    color: #0277bd;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }
`;
export const BtnArrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  outline: transparent;
  background: #fffde7;
  cursor: pointer;
  padding: 0;
  .icon-arrow {
    width: 28px;
    height: 28px;
    fill: #0288d1;
  }
  .icon-clear {
    width: 28px;
    height: 28px;
    fill: #d32f2f;
  }
  .icon-done {
    width: 24px;
    height: 24px;
    fill: #64dd17;
  }

  &:hover,
  :focus {
    background-color: #fff59d;
  }
`;
export const WrapOptions = styled.ul`
  position: absolute;
  z-index: 2;
  top: 44px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  list-style: none;
  width: 232px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  background-color: #fffde7;
  padding: 14px 18px 14px 18px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    right: 8px;
    width: 16px;
    margin: 16px 8px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-track {
    width: 16px;
    background-color: #fffde7;
    margin: 14px 8px 14px 0;
  }
  &::-webkit-scrollbar-thumb {
    width: 16px;
    height: 66px;
    border-top-right-radius: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 10px;
    border-right: 8px solid #fffde7;
    background-color: #fff59d;
  }
`;
export const OptionForm = styled.li`
  color: #0277bd;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  cursor: pointer;
  &:hover {
    color: #01579b;
    font-weight: 500;
  }
`;
// **** CALENDAR *****
export const WrapSelectDate = styled.div`
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px; */
  flex-direction: column;
  gap: 16px;
  padding: 0;
  margin: 0 auto;
  @media only screen and (min-width: 1100px) {
    flex-direction: row;
  }
`;
export const WrapStart = styled.div`
  position: relative;
  display: flex;
  width: 208px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 14px;
  background-color: #fffde7;
  padding: 8px 12px;
`;
export const WrapEnd = styled.div`
  position: relative;
  display: flex;
  width: 208px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 14px;
  background-color: #fffde7;
  padding: 8px 12px;
`;
export const SelectDateStart = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 20px;
  outline: #fffde7;
  border: none;
  background-color: #fffde7;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.11;
  text-align: left;
  color: #01579b;
  &::placeholder {
    color: #0277bd;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }
`;
export const SelectDateEnd = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 152px;
  height: 20px;
  outline: #fffde7;
  border: none;
  background-color: #fffde7;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.11;
  text-align: left;
  color: #01579b;
  &::placeholder {
    color: #0277bd;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
  }
`;
export const WrapOptionsDate = styled.div`
  position: absolute;
  z-index: 2;
  top: 40px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 232px;
  height: auto;
  border: 1px solid rgba(18, 20, 23, 0.05);
  padding: 0;
`;
export const WrapBtn = styled.div`
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
`;

export const Diagram = styled.button`
  width: 36px;
  height: 36px;
  .icon-graph {
    fill: #ffffff;
    width: 36px;
    height: 36px;
  }
`;
