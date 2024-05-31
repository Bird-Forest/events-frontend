import styled from 'styled-components';

export const FilterBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
  @media only screen and (min-width: 540px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    gap: 20px;
    padding: 0;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: fit-content;
    gap: 20px;
    padding: 0;
    margin: 0 auto;
  }
`;
export const WrapFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
`;
export const WrapCategory = styled.div`
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
`;
export const WrapSelect = styled.div`
  position: relative;
  display: flex;
  width: 208px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  /* gap: 8px; */
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
  font-size: 18px;
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
  /* position: absolute;
  top: 4px;
  right: 4px; */
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
  &:hover,
  :focus {
    /* background-color: #bbdefb; */
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
    /* background-color: rgba(18, 20, 23, 0.05); */
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
  /* position: relative; */
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  gap: 20px;
  /* border-radius: 14px;
  background-color: #fffde7;
  padding: 14px 18px; */
`;
export const WrapStart = styled.div`
  position: relative;
  display: flex;
  width: 208px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  /* gap: 20px; */
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
  /* gap: 20px; */
  border-radius: 14px;
  background-color: #fffde7;
  padding: 8px 12px;
`;
// export const DateStart = styled.div`
//   display: flex;
//   width: 180px;
//   height: 24px;
//   /* gap: 8px; */
// `;
// export const DateEnd = styled.div`
//   display: flex;
//   width: 152px;
//   height: 24px;
//   /* gap: 8px; */
// `;
export const SelectDateStart = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 196px;
  height: 20px;
  outline: #fffde7;
  border: none;
  background-color: #fffde7;
  padding: 0;
  font-size: 18px;
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
  font-size: 18px;
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
  padding: 0;
`;
export const WrapBtn = styled.div`
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
`;
export const BtnFilter = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 50%;
  /* background-color: #00acc1; */
  border: none;
  outline: none;
  cursor: pointer;
  .icon-search {
    fill: #0288d1;
    width: 32px;
    height: 32px;
  }
  &:hover,
  :focus {
    background-color: #fffde7;
  }
`;
// export const ListFilter = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   align-content: flex-start;
//   justify-content: center;
//   gap: 16px;
//   list-style: none;
//   padding: 0;
//   margin: 0 auto;
// `;
// ***  VIEW ****
export const WrapSearch = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;
export const SearchInput = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 188px;
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
export const WrapInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 14px;
  background: rgb(247, 247, 251);
  padding: 14px 18px;
`;
