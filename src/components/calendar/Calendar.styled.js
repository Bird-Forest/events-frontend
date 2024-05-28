import styled from 'styled-components';

export const WrapMonth = styled.div`
  display: grid;
  grid-template-columns: 344px;
  grid-template-rows: auto auto;
  gap: 4px;
`;
export const Panel = styled.div`
  display: grid;
  grid-template-columns: 40px auto 40px;
  grid-template-rows: 40px;
  justify-items: center;
  border-radius: 12px;
  background-color: #00bcd4;
  .title {
    display: grid;
    grid-template-columns: auto;
    color: #006064;
    font-size: 24px;
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
  /* .btn.disabled {
    color: #ffffff;
    cursor: not-allowed;
  } */
  .icon {
    fill: #006064;
    width: 24px;
    height: 24px;
  }
`;
export const WrapDays = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  gap: 8px;
  padding: 8px;
  background-color: #80deea;
  border-radius: 12px;
`;
export const Week = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: auto;
  justify-content: center;
  gap: 8px;
  padding: 0;
  margin: 0 auto;
  .week-day {
    display: grid;
    grid-template-columns: 40px;
    grid-template-rows: 40px;
    align-items: center;
    justify-items: center;
    border-radius: 10px;
    background-color: #ffffff;
    color: #006064;
    font-size: 20px;
    font-weight: 600;
  }
`;
export const Days = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-auto-flow: row;
  justify-content: center;
  gap: 8px;
  padding: 0;
  margin: 0 auto;
  cursor: pointer;
  .day {
    display: grid;
    grid-template-columns: 40px;
    grid-template-rows: 40px;
    align-items: center;
    justify-items: center;
    border-radius: 10px;
    font-size: 20px;
    color: #006064;
    background-color: #ffffff;
  }
  .day.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// export const Day = styled.span`
//   background-color: #fff;
//   border-radius: 50%;
//   text-align: center;
//   width: 32px;
//   height: 32px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   @media ${device.tablet} {
//     width: 34px;
//     height: 34px;
//   }
// `;

// export const Modal = styled.div`
//   position: fixed;
//   top: var(--modal-top);
//   left: var(--modal-left);
//   display: none;

//   &.open {
//     display: block;
//   }
// `;

// export const ModalContent = styled.div`
//   width: 292px;
//   height: 188px;
//   background-color: var(--primary-white);
//   padding: 24px 16px;
//   border-radius: 10px;
//   box-shadow: var(--btn-box-shadow);
//   position: absolute;

//   .close {
//     position: absolute;
//     top: 24px;
//     right: 16px;
//     font-size: 20px;
//     color: var(--primary-blue);
//   }
//   .title-modal {
//     position: absolute;
//     top: 24px;
//     color: var(--primary-blue);
//     font-size: 16px;
//     margin-bottom: 16px;
//   }
//   .modal-paragraf {
//     font-size: 16px;
//     color: var(--primary-black);
//     line-height: 20px;
//   }
//   .modal-paragraf-one {
//     margin-top: 36px;
//   }
//   .modal-paragraf-two-three {
//     margin-top: 16px;
//   }
//   .span-modal {
//     margin-left: 6px;
//     color: var(--primary-blue);
//     font-size: 18px;
//   }
// `;

// export const LowPercentageDay = styled(Day)`
//   border: var(--secondary-orange) 1px solid;
//   &.disabled {
//     border: none;
//   }
// `;
