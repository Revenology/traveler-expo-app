import React from 'react';
import { StyledTouchableOpacity } from './Button.style';
import { GestureResponderEvent } from 'react-native';
import { Text } from '@/components/Themed';

export interface ButtonProps {
	onPress: (event: GestureResponderEvent) => void;
	title: string;
	variant: 'primary' | 'secondary';
}

const Button = ({ onPress, title, variant }: ButtonProps) => {
	return (
		<StyledTouchableOpacity variant={variant} onPress={onPress}>
			<Text>{title}</Text>
		</StyledTouchableOpacity>
	);
};

export default Button;
