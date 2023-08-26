import { View } from '@/components/Themed';
import { Image, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';

export const ComponentWrapper = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 100%;
`;

export const StyledImage = styled(Image)`
	align-items: center;
	justify-content: center;
	width: 50;
	height: 50;
	resizemode: 'stretch';
`;

export const LoginWrapper = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const ButtonWrapper = styled(View)`
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 10px;
`;

export const StyledWrapper = styled(KeyboardAvoidingView)`
	width: 100%;
	height: 100%;
	flex: 1;
	align-items: center;
	justify-content: space-;
`;
