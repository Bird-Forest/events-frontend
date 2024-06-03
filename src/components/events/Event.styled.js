import styled from 'styled-components';
import cloud from '../../images/cloud.jpg';

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  /* background-color: rgb(204, 218, 70); */
  /* gap: 20px; */
  padding: 0;
  margin: 0;
  @media only screen and (min-width: 1480px) {
    margin: 0 auto;
  }
`;

// ***** EVENTLIST *****
export const ListWrap = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  gap: 16px;
  list-style: none;
  padding: 8px;
  margin: 24px auto 24px auto;
  @media only screen and (min-width: 768px) {
    margin: 96px auto 24px auto;
  }
  @media only screen and (min-width: 1084px) {
    margin: 128px auto 44px auto;
    /* overflow-y: scroll; */
  }
`;

// rgb(254, 152, 1);
// rgb(244, 238, 199);
// rgb(204, 218, 70);
// rgb(105, 124, 55);

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
  /* border: 1px solid #4dd0e1; */
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
  /* color: #ff9800; */
  /* color: #3f51b5; */
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
  /* &:hover,
  :focus {
    color: #006064;
    background-color: #0097a7;
  } */
`;
export const WrapBtn = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 48px;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.06);
  padding: 0;
  margin: 0 auto;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #fff8e1;
    /* border: 1px solid #0288d1; */
    /* backdrop-filter: blur(2px);
    background-color: rgb(204, 221, 255, 0.5); */
    border-radius: 24px;
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
  /* backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.5); */
  /* cursor: pointer;
  &:hover,
  :focus {
    background-color: #fffde7;
  } */
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
