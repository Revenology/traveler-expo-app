import { View } from '@/components/Themed';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

export const ButtonWrapper = styled(View)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	margin-top: 60px;
	width: 100%;
`;

export const JourneyWrapper = styled(ScrollView)`
	gap: 10px;
`;

export const ScrollViewWrapper = styled(View)`
	height: 170px;
	width: 100%;
`;
