import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export interface StyledTOProps {
  $variant?: 'primary' | 'secondary' | string;
  $width?: number;
  $border?: string;
}

export const StyledTouchableOpacity = styled(TouchableOpacity)<StyledTOProps>`
  border-radius: 10px;
  background-color: ${(props) =>
    props.$variant == 'secondary'
      ? '#6A96AD'
      : props.$variant == 'primary'
      ? '#72AE7A'
      : props.$variant};
  padding: 10px;
  width: ${(props) => (props.$width ? props.$width : '80%')};
  height: 50px;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.$border ? props.$border : 'none')};
  box-shadow: 2px 4px gray;
`;
