import { Text, View } from '@/components/Themed';
import { KeyboardAvoidingView } from 'react-native';
import { styled } from 'styled-components/native';

export const StyledWrapper = styled(KeyboardAvoidingView)`
	width: 100%;
	height: 100%;
	flex: 1;
	align-items: center;
	justify-content: space-;
`;

export const StyledComponentWrapper = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 100%;
`;

export const Title = styled(Text)`
	font-size: 20;
	font-weight: bold;
`;

export const StyledLine = styled(View)`
	margin-top: 50%;
	color: black;
	height: 1px;
	width: 80px;
`;
export const StyledImage = styled(View)`
	align-items: center;
	justify-content: center;
	width: 50;
	height: 50;
	resizemode: stretch;
`;

export const InputWrapper = styled(View)`
	align-items: left;
	justify-content: left;
	gap: 10px;
	width: 50%;
	height: auto;
	margin-bottom: 30px;
`;
