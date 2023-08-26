import React from 'react';
import { StyledTouchableOpacity } from './Button.style';
import { GestureResponderEvent } from 'react-native';
import { Text } from '@/components/Themed';

export interface ButtonProps {
	onPress: (event: GestureResponderEvent) => void;
	title: string;
	variant: 'primary' | 'secondary';
	disabled?: boolean;
}

const Button = ({ onPress, title, variant, disabled }: ButtonProps) => {
	return (
		<StyledTouchableOpacity
			variant={variant}
			onPress={onPress}
			disabled={disabled}
		>
			<Text style={{ color: 'white', fontWeight: 600 }}>{title}</Text>
		</StyledTouchableOpacity>
	);
};

export default Button;
