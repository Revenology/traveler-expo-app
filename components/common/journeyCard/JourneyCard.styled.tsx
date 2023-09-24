import { Text, View } from '@/components/Themed';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const CardWrapper = styled(TouchableOpacity)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #8273f7;
	margin: 10px;
	padding: 10px;
	border-radius: 10px;
	height: 150px;
`;

export const InlineWrapper = styled(View)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #8273f7;
	gap: 5px;
`;

export const Wrapper = styled(View)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #8273f7;
`;

export const CityText = styled(Text)`
	font-weight: 500;
	color: white;
`;

export const CountryText = styled(Text)`
	font-weight: 200;
	color: white;
`;

export const DayText = styled(Text)`
	font-weight: 700;
	color: white;
`;

export const WeightText = styled(Text)<{ $weight?: number }>`
	font-weight: ${(props) => (props.$weight ? props.$weight : 500)};
	color: white;
`;
