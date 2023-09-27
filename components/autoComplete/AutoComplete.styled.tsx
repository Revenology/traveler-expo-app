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
	width: 290px;
	display: flex;
	position: absolute;
	background-color: rgba(255, 255, 255, 0.5);
	top: 50px;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
`;

export const StyledText = styled.Text`
	width: 100%;
	text-align: start;
	padding: 5px;
`;

export const StyledPressable = styled.Pressable`
	align-items: center;
	display: flex;
	flex-direction: row;
	width: 290px;
	padding: 5px;
	gap: 10px;
	padding-left: 20px;
	height: 50px;
	background-color: white;
`;

export const IconImage = styled.Image`
	height: 16px;
	width: 16px;
`;
