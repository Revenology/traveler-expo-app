import { View } from '@/components/Themed';
import { Image } from 'react-native';
import styled from 'styled-components';

export const ImageMain = styled(Image)`
	height: 100%;
	width: 100%;
	padding: 0px;
	margin: 0px;
	overflow: auto;
`;

export const ImageContainer = styled(View)`
	height: 50%;
	width: 100%;
	margin: 10px;
	align-items: center;
	justify-content: center;
`;
