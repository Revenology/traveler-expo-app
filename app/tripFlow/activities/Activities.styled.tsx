import { Text, View } from '@/components/Themed';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

export const ButtonWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 60px;
  width: 100%;
`;

export const JourneyWrapper = styled(ScrollView)`
  gap: 10px;
  width: 100%;
`;

export const ScrollViewWrapper = styled(View)`
  height: 30%;
  width: 90%;
`;

export const SecondaryTitle = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
  padding: 0px;
`;

export const TitleWrapper = styled(View)`
  width: 90%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const SectionWrapper = styled(View)`
  width: 90%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

export const SectionScroll = styled(ScrollView)`
  height: 100%;
  width: 100%;
`;

export const PillWrapper = styled(View)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 5px;
`;

export const ActivityListModal = styled(View)`
  gap: 10px;
  height: auto;
  width: auto;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 10px;
`;
