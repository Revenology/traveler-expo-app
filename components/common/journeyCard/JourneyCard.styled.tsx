import { Text, View } from '@/components/Themed';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const CardWrapper = styled(TouchableOpacity)<{ $isActive: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => (props.$isActive ? '#8273f7' : '#F2F5F9')};
	margin: 10px;
	padding: 10px;
	border-radius: 10px;
	height: 150px;
`;

export const InlineWrapper = styled(View)<{ $isActive: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => (props.$isActive ? '#8273f7' : '#F2F5F9')};
	gap: 5px;
`;

export const Wrapper = styled(View)<{ $isActive: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => (props.$isActive ? '#8273f7' : '#F2F5F9')};
`;

export const CityText = styled(Text)<{ $isActive: boolean }>`
	font-weight: 500;
	color: ${(props) => (props.$isActive ? 'white' : 'black')};
`;

export const CountryText = styled(Text)<{ $isActive: boolean }>`
	font-weight: 200;
	color: ${(props) => (props.$isActive ? 'white' : 'black')};
`;

export const DayText = styled(Text)<{ $isActive: boolean }>`
	font-weight: 700;
	color: ${(props) => (props.$isActive ? 'white' : 'black')};
`;

export const WeightText = styled(Text)<{
	$weight?: number;
	$isActive: boolean;
}>`
	font-weight: ${(props) => (props.$weight ? props.$weight : 500)};
	color: ${(props) => (props.$isActive ? 'white' : 'black')};
`;
