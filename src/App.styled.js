import styled from 'styled-components';
import sky from '../src/images/sky1.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #b2ebf2;
  background-image: url(${sky});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  @media only screen and (min-width: 1480px) {
    height: 100vh;
    background-position: bottom;
  }
`;
