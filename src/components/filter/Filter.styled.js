import styled from 'styled-components';
export const FilterBar = styled.div`
  /* z-index: 1; */
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 600px;
  height: 74px;
  padding: 0;
  margin: 20px auto;
`;

export const WrapFilter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

export const WrapOrganiser = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  border-radius: 14px;
  background: rgb(247, 247, 251);
  padding: 14px 18px;
`;

export const SelectText = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 188px;
  height: 20px;
  outline: rgb(247, 247, 251);
  border: none;
  background-color: rgb(247, 247, 251);
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.11;
  text-align: left;
  color: #00838f;
`;
export const BtnArrow = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  outline: transparent;
  background: rgb(247, 247, 251);
  cursor: pointer;
  .icon-arrow {
    width: 40px;
    height: 40px;
    fill: #00838f;
  }
`;
export const WrapList = styled.ul`
  position: absolute;
  top: 36px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  width: 224px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  background-color: rgb(255, 255, 255);
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
    background-color: rgb(255, 255, 255);
    margin: 14px 8px 14px 0;
  }
  &::-webkit-scrollbar-thumb {
    width: 16px;
    height: 66px;
    border-top-right-radius: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 10px;
    border-right: 8px solid rgb(255, 255, 255);
    background-color: rgba(18, 20, 23, 0.05);
  }
`;
export const OptionForm = styled.li`
  color: #00acc1;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  cursor: pointer;
  &:hover {
    color: #00838f;
    font-weight: 600;
  }
`;
export const WrapData = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  border-radius: 14px;
  background: rgb(247, 247, 251);
  padding: 13px 18px;
`;
export const SelectData = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 28px;
  height: 20px; */
  width: 130px;
  height: 20px;
  outline: rgb(247, 247, 251);
  border: none;
  background-color: rgb(247, 247, 251);
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.11;
  text-align: left;
  color: #00838f;
  /* outline: rgb(247, 247, 251);
  border: none;
  background-color: rgb(247, 247, 251);
  color: rgb(18, 20, 23);
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left; */
`;
export const BtnFilter = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 50%;
  background-color: #00acc1;
  border: none;
  outline: none;
  cursor: pointer;
  .icon-search {
    fill: #ffffff;
    width: 32px;
    height: 32px;
  }
  &:hover,
  :focus {
    background-color: #00bcd4;
  }
`;