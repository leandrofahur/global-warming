import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1756dd21;
  z-index: 10;
`;

export const Logo = styled.h1`
  margin: 0;
  color: var(--white);
  font-weight: 700;
  font-size: 70px;
`;

export const Slogan = styled.h4`
  margin: 0;
  color: var(--white);
  font-weight: 700;
  font-size: 30px;
  margin-top: 25px;
`;
