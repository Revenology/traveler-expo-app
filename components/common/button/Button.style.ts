import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export interface StyledTOProps {
	variant?: 'primary' | 'secondary';
}

export const StyledTouchableOpacity = styled(TouchableOpacity)<StyledTOProps>`
	border-radius: 25px;
	background-color: ${(props) =>
		props.variant == 'secondary' ? '#6A96AD' : '#72AE7A'};
	padding: 10px;
	width: 60%;
	height: 50px;
	align-items: center;
	justify-content: center;
`;
