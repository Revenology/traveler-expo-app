import styled from 'styled-components';
import { View } from '../Themed';

export const PageWrapper = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const PageWrapperSpace = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderWrapper = styled(View)`
  padding-top: 40px;
  height: 15%;
  width: 90%;
  display: flex;
  align-items: start;
  justify-content: center;
`;
export const FooterWrapper = styled(View)`
  height: 15%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BodyWrapper = styled(View)`
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
