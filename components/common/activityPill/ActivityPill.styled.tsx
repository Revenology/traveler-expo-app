import { Text, View } from '@/components/Themed';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const PillContainer = styled(TouchableOpacity)<{ $color: string }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 5px;
	padding: 5px;
	width: 100px;
	background-color: ${(props) => (props.$color ? props.$color : 'gray')};
	border-radius: 15px;
	height: 30px;
`;

export const Circle = styled(View)<{ $color: string }>`
	height: 6px;
	width: 6px;
	border-radius: 3px;
	background-color: ${(props) => (props.$color ? props.$color : 'white')};
`;

export const ColorText = styled(Text)`
	color: white;
`;
