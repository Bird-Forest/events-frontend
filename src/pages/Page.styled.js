import styled from 'styled-components';

export const WrapPage = styled.div`
  display: grid;
  grid-template-columns: minmax(380px, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  /* background-color: #b2ebf2; */
  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
  }
  .back {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.11;
    text-align: left;
    color: #00838f;
    text-decoration: none;
  }
  /* .back:hover,
  :hover {
    font-weight: 600;
    color: #0097a7;
  } */
`;
