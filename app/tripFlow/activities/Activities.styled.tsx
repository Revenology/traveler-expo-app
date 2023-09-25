import { Text, View } from '@/components/Themed';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

export const ButtonWrapper = styled(View)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	margin-top: 60px;
	width: 100%;
`;

export const JourneyWrapper = styled(ScrollView)`
	gap: 10px;
`;

export const ScrollViewWrapper = styled(View)`
	height: 170px;
	width: 90%;
`;

export const SecondaryTitle = styled(Text)`
	font-size: 20px;
	font-weight: 500;
	margin: 0px;
	padding: 0px;
`;

export const TitleWrapper = styled(View)`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
`;

export const BodyWrapper = styled(View)`
	width: 90%;
	height: 40%;
	display: flex;
	justify-content: space-around;
	margin-top: 30px;
`;

export const PillWrapper = styled(View)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	gap: 5px;
`;
