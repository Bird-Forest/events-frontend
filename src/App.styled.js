import styled from 'styled-components';
import sky from '../src/images/sky1.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background-color: #b2ebf2;
  background-image: url(${sky});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding: 0;
  margin: 0 auto;
  @media only screen and (min-width: 780px) {
    height: 100vh;
    background-position: bottom;
  }
`;
