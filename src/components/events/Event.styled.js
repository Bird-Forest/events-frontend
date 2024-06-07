import styled from 'styled-components';
import cloud from '../../images/cloud.jpg';

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  padding: 0;
  margin: 0 auto;
`;
// ***** EVENTLIST *****
export const ListWrap = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  gap: 16px;
  list-style: none;
  padding: 8px;
  margin: 48px auto 48px auto;
  &::-webkit-scrollbar {
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
    padding: 8px 16px;
  }
  @media only screen and (min-width: 1100px) {
    margin: 68px auto 68px auto;
  }
  @media only screen and (min-width: 1449px) {
    margin: 0 auto;
    overflow-y: hidden;
  }
`;
//***** ITEM *****/
export const ItemWrap = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 284px;
  height: 340px;
  row-gap: 8px;
  background-color: #ffb300;
  background-image: url(${cloud});
  background-size: cover;
  border-radius: 10px;
  padding: 8px;
  @media only screen and (min-width: 768px) {
    width: 300px;
    padding: 16px;
  }
`;
export const WrapDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  gap: 24px;
`;
export const ItemOrgn = styled.h4`
  display: flex;
  color: #64dd17;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  background-color: #fffde7;
  border-radius: 28px;
  padding: 6px 12px;
`;
export const ItemDate = styled.h4`
  display: flex;
  color: #64dd17;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  background-color: #fffde7;
  border-radius: 28px;
  padding: 6px 12px;
`;
export const ItemTitle = styled.h3`
  display: flex;
  align-items: center;
  height: 24px;
  color: #0277bd;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  background-color: #fffde7;
  border-radius: 28px;
  padding: 6px 12px 10px 12px;
`;
export const ItemDescript = styled.p`
  display: flex;
  align-items: center;
  height: 164px;
  color: #01579b;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
`;
export const ItemWab = styled.a`
  display: flex;
  height: 28px;
  color: #0277bd;
  font-size: 20px;
`;
export const WrapLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  gap: 16px;
`;
export const ItemLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  color: #fffde7;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  background-color: #64dd17;
  border-radius: 8px;
  cursor: pointer;
`;
// *** PAGINATION ***
export const WrapBtn = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 48px;
  padding: 0;
  margin: 0 auto;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #fff8e1;
    border-radius: 24px;
  }
  @media only screen and (min-width: 1100px) {
    margin: 0 auto 20px auto;
  }
  @media only screen and (min-width: 1449px) {
    margin: 0 auto 40px auto;
  }
`;
export const BtnPagin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  border: none;
  outline: transparent;
  .btn-icon {
    width: 24px;
    height: 24px;
    fill: #64dd17;
  }
`;
export const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  .text {
    font-size: 28px;
    font-weight: 600;
    color: #64dd17;
  }
`;
