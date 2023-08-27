import styled from 'styled-components';
import { Text, View } from '@/components/Themed';

export const StyledWrapper = styled(View)`
	align-items: right;
	padding-left: 10px;
	justify-content: center;
	border-radius: 5px;
	width: 75%;
	background-color: #f6f6f6;
	height: 50px;
	border: 1px solid #e9e9e9;
`;

export const StyledError = styled(Text)`
	width: 50%;
	color: red;
	font-size: 10px;
`;

export const StyledLabel = styled(Text)`
	width: 50%;
	color: black;
	font-size: 15px;
`;
