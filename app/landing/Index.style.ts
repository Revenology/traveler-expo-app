import { Text, View } from '@/components/Themed';
import { Image } from 'react-native';
import { styled } from 'styled-components/native';

export const StyledWrapper = styled(View)`
	height: 100%;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const StyledComponentWrapper = styled(View)`
	align-items: center;
	justify-content: center;
	height: auto;
	gap: 10px;
	width: 100%;
`;

export const Title = styled(Text)`
	font-size: 30;
	font-weight: bold;
	margin: 0px;
	padding: 0px;
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
	height: 50;
`;

export const ImageMain = styled(Image)`
	height: 350;
	width: 100%;
	padding: 0px;
	margin: 0px;
`;

export const ImageContainer = styled(View)`
	height: 50%;
	width: 100%;
	margin: 10px;
	align-items: center;
	justify-content: center;
`;
