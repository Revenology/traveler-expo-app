import { Text } from '@/components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const StyledAddButton = styled(TouchableOpacity)`
  height: 30px;
  width: 30px;
  border-radius: 12px;
  background-color: #1b1d20;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled(Text)`
  color: white;
  font-size: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
