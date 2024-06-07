import styled from 'styled-components';

export const WrapCharts = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  gap: 16px;
  list-style: none;
  padding: 8px;
  margin: 0 auto;
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
    margin: 20px auto;
  }
  @media only screen and (min-width: 1449px) {
    margin: 0 auto;
    overflow-y: hidden;
  }
`;
export const WrapCartOrganizer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
`;
export const WrapCartSpeciality = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 0;
  margin: 0 auto;
`;
export const WrapChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: rgb(204, 221, 255, 0.5);
  border-radius: 16px;
  /* width: 300px;
  height: auto; */
  padding: 10px;
  margin: 0 auto;
`;
