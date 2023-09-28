import { Text, View } from '@/components/Themed';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

export const NavigatorWrapper = styled(View)`
	display: flex;
	flex-direction: row;
	width: 80%;
	justify-content: space-between;
	align-items: center;
`;

export const BackButton = styled(TouchableOpacity)``;

export const ForwardButton = styled(TouchableOpacity)``;

export const BackText = styled(Text)``;
export const ForwardText = styled(Text)``;
