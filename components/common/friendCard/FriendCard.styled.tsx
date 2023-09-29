import { View } from '@/components/Themed';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const CardWrapper = styled(TouchableOpacity)`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 80%;
	height: 80px;
	border: 1px solid gray;
	border-radius: 0px 0px 10px 10px;
	background-color: white;
	box-shadow: 5px 5px gray;
	gap: 10px;
	padding: 10px;
	margin-bottom: 10px;
`;

export const Pfp = styled(Image)`
	height: 30px;
	width: 30px;
	border-radius: 15px;
	outline: 1px solid gray;
	outline-offset: 5px;
`;

export const DetailWrapper = styled(View)``;
