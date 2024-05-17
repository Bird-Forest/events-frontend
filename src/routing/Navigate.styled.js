import styled from 'styled-components';

export const NavWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 0;
  margin: 0 auto;
  .navigate {
    font-size: 28px;
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
