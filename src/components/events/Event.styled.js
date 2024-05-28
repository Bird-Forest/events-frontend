import styled from 'styled-components';
import cloud from '../../images/cloud.jpg';

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: 100%;
  align-items: center;
  background-color: rgb(204, 218, 70);
  gap: 20px;
  padding: 0;
  margin: 0;
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
  padding: 0;
  margin: 0 auto;
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
  width: 340px;
  height: 300px;
  row-gap: 4px;
  background-color: #ffeb3b;
  background-image: url(${cloud});
  background-size: cover;
  border-radius: 10px;
  /* border: 1px solid #4dd0e1; */
  padding: 16px;
`;
export const ItemTitle = styled.h3`
  display: flex;
  color: #ff9800;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  background-color: #fffde7;
  border-radius: 28px;
  padding: 8px 12px;
`;
export const WrapDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 28px; */
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
// export const WrapTime = styled.div`
//   display: flex;
// `;
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
export const ItemDescript = styled.p`
  display: flex;
  color: #3f51b5;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
`;
export const ItemWab = styled.a`
  display: flex;
  color: #3f51b5;
  font-size: 20px;
`;
export const WrapLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
export const ItemLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 40px;
  color: #ffffff;
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
