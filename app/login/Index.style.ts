import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import { Image, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';

export const ComponentWrapper = styled(View)`
	align-items: center;
	overflow: auto;
	justify-content: center;
	gap: 40px;
	width: 100%;
	height: 40%;
	z-index: 1;
`;

export const StyledImage = styled(Image)`
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
`;

export const LoginWrapper = styled(View)`
	align-items: center;
	justify-content: center;
	gap: 5px;
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
	justify-content: center;
`;

export const AssistText = styled(Text)`
	width: 75%;
	font-size: 20;
	font-weight: bold;
	margin: 0px;
	padding: 0px;
`;

export const StyledLink = styled(Link)`
	color: #72ae7a;
	margin: 5px;
`;
