import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from '../../styleConstants'

export const Container = styled.div`
  max-height: 100vh;
  width:100vw;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  margin-bottom:200px;
  @media (max-width:${MOBILE_BREAKPOINT}px) {
    margin-bottom:130px;
  }
`;

