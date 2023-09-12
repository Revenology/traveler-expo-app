import styled from 'styled-components/native';

export const ScreenWrapper = styled.View`
	width: 100%;
	padding: 0;
	margin: 0;
	border-radius: 10px;
	align-items: center;
	position: absolute;
	top: 75px;
	z-index: 3;
`;

export const StyledList = styled.FlatList`
	width: 75%;
	border-radius: 10px;
	position: absolute;
	background-color: rgba(255, 255, 255, 0.5);
	top: 50px;
`;

export const StyledText = styled.Text`
	width: 100%;
	color: white;
`;

export const StyledPressable = styled.Pressable`
	align-items: center;
	margin: 5px;
	padding: 5px;
	background-color: #ef8e3c;
	border-radius: 10px;
`;
