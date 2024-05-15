import styled from 'styled-components';

export const NavWrap = styled.header`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: auto;
  justify-content: space-between;
  align-items: center;
  .navigate {
    font-size: clamp(16px, 0.909rem + 0.45vw, 20px);
    font-weight: 600;
    color: #006064;
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: #ffffff;
    }
  }
  .title-top {
    font-size: clamp(16px, 0.909rem + 0.45vw, 20px);
    font-weight: 600;
    color: #006064;
  }
`;
