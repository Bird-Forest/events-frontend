import styled from 'styled-components';

export const ViewWrap = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  margin: 0 auto;
`;
export const WrapGoBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .back {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.11;
    text-align: left;
    color: #ffffff;
    text-decoration: none;
    padding: 0;
  }
`;

// ** FILTER **
export const WrapSearch = styled.div`
  /* top: 60px;
  position: fixed;
  z-index: 1; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: min-content;
  align-items: center;
  gap: 8px;
  @media only screen and (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
  }
`;
export const WrapInput = styled.div`
  display: flex;
  width: 260px;
  height: 24px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 14px;
  padding: 8px 12px;
  background: rgb(247, 247, 251);
`;
export const SearchInput = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
  height: 20px;
  outline: rgb(247, 247, 251);
  border: none;
  background-color: rgb(247, 247, 251);
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
  color: #01579b;
  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.11;
    text-align: left;
    color: #0277bd;
  }
`;

// export const WrapEmail = styled.div`
//   display: flex;
//   width: 260px;
//   height: 24px;
//   justify-content: flex-start;
//   align-items: center;
//   border-radius: 14px;
//   padding: 8px 12px;
//   background: rgb(247, 247, 251);
// `;
export const BtnSearch = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  .icon-search {
    fill: #01579b;
    width: 28px;
    height: 28px;
  }
  .icon-clear {
    width: 28px;
    height: 28px;
    fill: #d32f2f;
  }
  &:hover,
  :focus {
    background-color: #e3f2fd;
  }
`;
// export const BtnClear = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 28px;
//   height: 28px;
//   border-radius: 50%;
//   border: none;
//   outline: transparent;
//   background: #fffde7;
//   cursor: pointer;
//   padding: 0;
//   .icon-clear {
//     width: 28px;
//     height: 28px;
//     fill: #d32f2f;
//   }
//   &:hover,
//   :focus {
//     background-color: #fff59d;
//   }
// `;
// ***  VIEW LIST****
export const WrapViewList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* height: min-content; */
  align-content: flex-start;
  justify-content: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  gap: 12px;
  list-style: none;
  padding: 8px;
  margin: 160px auto 20px auto;

  &::-webkit-scrollbar {
    right: 0;
    width: 8px;
    height: 80px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 4px;
    margin: 20px 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #01579b;
  }
  @media only screen and (min-width: 768px) {
    margin: 120px auto 20px auto;
  }
`;
export const WrapItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 284px;
  height: 80px;
  align-content: center;
  backdrop-filter: blur(2px);
  /* background-color: #0288d1; */
  background-color: rgb(2, 136, 209, 0.5);
  border-radius: 16px;
  border: 1px solid #4dd0e1;
  padding: 8px;
`;
export const ViewText = styled.h4`
  display: flex;
  gap: 20px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
`;
