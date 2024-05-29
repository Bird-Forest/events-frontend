import styled from 'styled-components';

export const ViewFilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
`;
export const WrapViewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;
export const WrapItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 80px;
  align-content: center;
  background-color: #0288d1;
  border-radius: 16px;
  border: 2px solid #4dd0e1;
  padding: 16px;
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
