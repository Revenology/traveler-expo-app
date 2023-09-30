import React from 'react';
import { StyledTouchableOpacity } from './Button.style';
import { GestureResponderEvent } from 'react-native';
import { Text } from '@/components/Themed';

export interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  variant: 'primary' | 'secondary' | string;
  disabled?: boolean;
  width?: string;
  color?: string;
  border?: string;
}

const Button = ({
  onPress,
  title,
  variant,
  disabled,
  width,
  color,
  border,
}: ButtonProps) => {
  return (
    <StyledTouchableOpacity
      $variant={variant}
      onPress={onPress}
      disabled={disabled}
      $width={width}
      $border={border}
    >
      <Text style={{ color: color ? color : 'white', fontWeight: 600 }}>
        {title}
      </Text>
    </StyledTouchableOpacity>
  );
};

export default Button;
