import { Image, StyleSheet } from 'react-native';
import logo from '../../../assets/images/logo.png';
import React from 'react';
import { StyledComponentWrapper, StyledWrapper, Title } from './Index.style';
import { useRouter } from 'expo-router';
import Button from '@/components/common/button/Button';

const Landing = () => {
	const router = useRouter();

	return (
		<StyledWrapper>
			<StyledComponentWrapper>
				<Title>Traveler</Title>
				<Image source={logo} style={styles.image} />
			</StyledComponentWrapper>
			<StyledComponentWrapper>
				<Button
					variant="primary"
					title="Login"
					onPress={() => {
						router.push('/(tabs)/login/Index');
					}}
				/>
				<Button
					variant="secondary"
					title="Signup"
					onPress={() => {
						router.push('/(tabs)/signup/Index');
					}}
				/>
			</StyledComponentWrapper>
		</StyledWrapper>
	);
};

const styles = StyleSheet.create({
	image: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 50,
		height: 50,
		resizeMode: 'stretch',
	},
});

export default Landing;
