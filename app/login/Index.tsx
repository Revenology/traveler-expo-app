import { PageWrapper } from '@/components/common/PageWrapper';
import { Text, View } from '@/components/Themed';
import baseImage from '../../assets/blush/login.png';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/textinput/Input';
import React from 'react';
import { GestureResponderEvent, Image, Modal } from 'react-native';
import {
	AssistText,
	ButtonWrapper,
	ComponentWrapper,
	LoginWrapper,
	StyledImage,
	StyledLink,
	StyledWrapper,
} from './Index.style';
import { Title } from '@/components/common/Title';
import { Link } from 'expo-router';
import HeroImage from '@/components/common/heroImage/HeroImage';

const Login = () => {
	return (
		<StyledWrapper behavior="position">
			<PageWrapper>
				<ComponentWrapper>
					<Title>Welcome back!</Title>
					<HeroImage source={baseImage} />
				</ComponentWrapper>
				<LoginWrapper>
					<AssistText>Login</AssistText>
					<Input value={null} placeholder="Email or Username" />
					<Input value={null} placeholder="Password" />
					<ButtonWrapper>
						<Button
							onPress={function (event: GestureResponderEvent): void {
								throw new Error('Function not implemented.');
							}}
							title={'Login'}
							variant={'primary'}
						/>
					</ButtonWrapper>
					<StyledLink href={'/(tabs)/landing/Index'}>
						Forgot your password?
					</StyledLink>
					<StyledLink href={'/'}>Already have an account?</StyledLink>
				</LoginWrapper>
			</PageWrapper>
		</StyledWrapper>
	);
};

export default Login;
