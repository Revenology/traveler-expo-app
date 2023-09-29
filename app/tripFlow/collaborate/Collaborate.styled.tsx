import { View } from '@/components/Themed';
import { Image, ScrollView } from 'react-native';
import styled from 'styled-components';

export const SectionWrapper = styled(View)`
	width: 90%;
	height: 70%;
	display: flex;
	justify-content: start;
	align-items: center;
	margin-top: 30px;
`;

export const FriendsModal = styled(View)`
	height: auto;
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

export const CollaborateWrapper = styled(ScrollView)`
	gap: 10px;
	width: 100%;
	height: 70%;
`;

export const Pfp = styled(Image)`
	height: 10px;
	width: 10px;
`;
