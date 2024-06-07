import styled from 'styled-components';

export const WrapMonth = styled.div`
  display: grid;
  grid-template-columns: 232px;
  grid-template-rows: 28px 196px;
`;
export const Panel = styled.div`
  display: grid;
  grid-template-columns: 40px 152px 40px;
  grid-template-rows: 28px;
  justify-items: center;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  background-color: #64dd17;
  .title {
    display: grid;
    grid-template-columns: auto;
    text-align: center;
    color: #fffde7;
    font-size: 16px;
    font-weight: 600;
  }
  .btn {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-content: center;
    background-color: transparent;
    border: none;
    outline: transparent;
    cursor: pointer;
  }
  .icon {
    fill: #fffde7;
    width: 40px;
    height: 20px;
  }
`;
export const WrapDays = styled.div`
  display: grid;
  grid-template-columns: 216px;
  grid-template-rows: auto;
  gap: 4px;
  padding: 8px;
  background-color: #fffde7;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
export const Week = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: auto;
  justify-content: center;
  gap: 6px;
  padding: 0;
  margin: 0 auto;
  .week-day {
    display: grid;
    grid-template-columns: 24px;
    grid-template-rows: 24px;
    align-items: center;
    justify-items: center;
    border-radius: 4px;
    border: 1px solid #ffb300;
    background-color: #ffb300;
    color: #fffde7;
    font-size: 14px;
    font-weight: 600;
  }
`;
export const Days = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-auto-flow: row;
  justify-content: center;
  gap: 6px;
  padding: 0;
  margin: 0 auto;
  /* cursor: pointer; */
  .day {
    display: grid;
    grid-template-columns: 24px;
    grid-template-rows: 24px;
    align-items: center;
    justify-items: center;
    border-radius: 4px;
    border: 1px solid #ffb300;
    font-size: 16px;
    color: #01579b;
    background-color: #ffffff;
    cursor: pointer;
  }
  .day.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
