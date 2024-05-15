import styled from 'styled-components';

export const FormWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  margin: 0;
  padding: 0;

  .my-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    background-color: white;
    border-radius: 16px;
    border: 2px solid #eeeeee;
    margin: 8px auto;
    gap: 4px;
    padding: 8px;
  }
  .my-title {
    font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
    text-align: center;
    font-weight: 700;
    color: #616161;
    padding: 0;
    margin: 0;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    color: white;
    font-size: 16px;
    font-weight: 700;
    background-color: #bdbdbd;
    border-radius: 16px;
    border: 1px solid #bdbdbd;
    outline: #bdbdbd;
    height: 40px;
    margin: 0;
    padding: 0 100px;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #757575;
    }
    @media screen and (min-width: 767px) {
      margin: 8px auto;
    }
  }
`;

export const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 8px auto 8px auto;
  .my-input {
    display: flex;
    flex-grow: 1;
    /* height: 20px; */
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 4px 8px;
    margin: 0;
  }
  .my-input.error {
    border: 2px solid #ff1744;
  }
  .label-input {
    position: absolute;
    top: -24%;
    left: 28px;
    font-size: 14px;
    text-align: center;
    color: #616161;
    background-color: white;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    padding: 0;
    margin: 0;
  }
  .label-input.error {
    color: #ff1744;
  }
  .my-password {
    display: flex;
    flex-grow: 1;
    /* height: 20px; */
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 4px 8px;
    margin: 0;
  }
  .my-password.error {
    border: 2px solid #ff1744;
  }
`;
export const RadioWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 40px;
  .radio-title {
    display: grid;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #616161;
    outline: #616161;
    padding: 4px 8px;
    margin: 0;
  }
  .radio-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
  .lable-picked {
    display: grid;
    font-size: 16px;
    color: #616161;
  }
  .label-picked.error {
    color: #ff1744;
  }
  .input-picked {
    display: grid;
    font-size: 16px;
    color: #616161;
  }
  .input-picked.error {
    border: 2px solid #ff1744;
  }
`;
export const ErrorMessage = styled.div`
  color: #ff1744;
  font-size: 12px;
`;
