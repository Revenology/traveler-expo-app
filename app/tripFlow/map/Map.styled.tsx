import { Text, View } from '@/components/Themed';
import styled from 'styled-components';

export const ButtonWrapper = styled(View)`
	position: absolute;
	bottom: 30px;
	background-color: rgba(0, 0, 0, 0);
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 100%;
`;

export const SearchWrapper = styled(View)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
	width: 100%;
`;

export const WarningMessage = styled(Text)`
	color: red;
`;

export const WarningWrapper = styled(View)`
	display: flex;
	position: absolute;
	bottom: 100px;
	padding: 10px;
	border-radius: 10px;
	border: 1px solid black;
	box-shadow: 2px 4px;
`;
