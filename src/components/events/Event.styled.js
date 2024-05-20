import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  background-color: #b2ebf2;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

// ***** EVENTLIST *****
export const ListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;
//***** ITEM *****/
export const ItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 380px;
  gap: 8px;
  background-color: #00bcd4;
  border-radius: 10px;
  border: 1px solid #4dd0e1;
  padding: 20px;
`;
export const ItemTitle = styled.h3`
  display: flex;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
`;
export const WrapDate = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
`;
export const ItemOrgn = styled.h4`
  display: flex;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`;
export const WrapTime = styled.div`
  display: flex;
`;
export const ItemDate = styled.h4`
  display: flex;
  color: #006064;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`;
export const ItemDescript = styled.p`
  display: flex;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`;
export const WrapLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
export const ItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 60px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  background-color: #00acc1;
  border-radius: 8px;
  cursor: pointer;
  &:hover,
  :focus {
    color: #ffffff;
    background-color: #0097a7;
  }
`;
export const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 48px;
  padding: 0;
  margin: 0 auto;
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
  background-color: #00acc1;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #0097a7;
  }
  .btn-icon {
    width: 28px;
    height: 28px;
    fill: #ffffff;
  }
`;
export const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  .text {
    font-size: 32px;
    font-weight: 600;
    color: #006064;
  }
`;
