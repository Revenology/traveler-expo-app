import { Pressable, StyleSheet } from 'react-native';
import tile from '../../assets/blush/landing.png';
import React from 'react';
import {
	Image,
	ImageContainer,
	ImageMain,
	StyledComponentWrapper,
	StyledWrapper,
	Title,
} from './Index.style';
import { Link, useRouter } from 'expo-router';
import Button from '@/components/common/button/Button';
import { Text } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Landing = () => {
	const router = useRouter();

	return (
		<StyledWrapper>
			<StyledComponentWrapper>
				<ImageContainer>
					<ImageMain source={tile} />
				</ImageContainer>
				<Title>Traveler</Title>
				<Text style={{ color: 'gray', margin: '0%', padding: '0%' }}>
					Plan your travels, together!
				</Text>
			</StyledComponentWrapper>
			<StyledComponentWrapper>
				<Button
					variant="primary"
					title="Login"
					onPress={() => {
						router.push('/login/Index');
					}}
				/>
				<Button
					variant="secondary"
					title="Sign up"
					onPress={() => {
						router.push('/signup/Index');
					}}
				/>
			</StyledComponentWrapper>
		</StyledWrapper>
	);
};

export default Landing;
