import styled from 'styled-components';

export const FormWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  .my-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 380px;
    background-color: white;
    border-radius: 16px;
    background-color: #80deea;

    gap: 12px;
    padding: 20px 20px 40px 20px;
  }
  .my-title {
    font-size: 28px;
    text-align: center;
    font-weight: 600;
    color: #006064;
    padding: 0;
    margin: 0;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 280px;
    height: 40px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    text-decoration: none;
    background-color: #00acc1;
    border-radius: 8px;
    border: none;
    outline: transparent;
    cursor: pointer;
    &:hover,
    :focus {
      background-color: #0097a7;
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 8px auto 8px auto;
  .my-input {
    display: flex;
    width: 300px;
    height: 36px;
    color: #006064;
    font-size: 20px;
    border-radius: 8px;
    border: 2px solid #ffffff;
    outline: #ffffff;
    padding: 4px 8px;
    margin: 0;
  }
  .my-input.error {
    border: 2px solid #ff1744;
  }
  .label-input {
    font-size: 16px;
    text-align: left;
    color: #006064;
    pointer-events: none;
    padding: 0;
    margin: 0;
  }
  .label-input.error {
    color: #ff1744;
  }
`;
export const RadioWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  .radio-title {
    display: flex;
    font-size: 20px;
    color: #006064;
    padding: 0;
    margin: 0;
  }
  .radio-group {
    display: flex;
  }
  .lable-picked {
    display: flex;
    font-size: 20px;
    color: #006064;
    padding: 0;
    margin: 0;
  }
  .label-picked.error {
    color: #ff1744;
  }
  .input-picked {
    display: grid;
    font-size: 16px;
    color: #006064;
  }
  .input-picked.error {
    border: 2px solid #ff1744;
  }
`;
export const ErrorMessage = styled.div`
  color: #ff1744;
  font-size: 12px;
`;
