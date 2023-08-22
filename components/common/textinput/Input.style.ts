import styled from 'styled-components';
import { Text, View } from '@/components/Themed';

export const StyledWrapper = styled(View)`
	align-items: right;
	padding-left: 10px;
	justify-content: center;
	border-radius: 5px;
	width: 50%;
	height: 30px;
	border: 1px solid black;
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
