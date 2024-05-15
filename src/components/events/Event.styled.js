import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ***** EVENTLIST *****
export const ListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: row;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;
//***** ITEM *****/
export const ItemWrap = styled.li`
  display: grid;
  grid-template-columns: 344px;
  grid-template-rows: 40px 32px 210px 40px;
  gap: 8px;
  background-color: #00bcd4;
  border-radius: 10px;
  border: 1px solid #4dd0e1;
  padding: 16px;
`;
export const ItemTitle = styled.h3`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  text-align: center;
`;
export const ItemDescript = styled.p`
  display: grid;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`;
export const WrapDate = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
`;
export const WrapTime = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
`;
export const ItemDate = styled.h4`
  display: grid;
  color: #006064;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`;
export const ItemOrgn = styled.h4`
  display: grid;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5;
`;
export const WrapLink = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 16px;
`;
export const ItemLink = styled(Link)`
  display: grid;
  justify-content: center;
  align-items: center;
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
    background-color: #0097a7;
  }
`;
