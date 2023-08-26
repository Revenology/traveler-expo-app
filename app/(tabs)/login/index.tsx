import { PageWrapper } from '@/components/common/PageWrapper';
import { Text, View } from '@/components/Themed';
import logo from '../../../assets/images/logo.png';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/textinput/Input';
import React from 'react';
import { GestureResponderEvent, Image } from 'react-native';
import {
	ButtonWrapper,
	ComponentWrapper,
	LoginWrapper,
	StyledImage,
	StyledWrapper,
} from './Index.style';
import { Title } from '@/components/common/Title';
import { Link } from 'expo-router';

const Login = () => {
	return (
		<StyledWrapper behavior="padding">
			<PageWrapper>
				<ComponentWrapper>
					<Title>Traveler</Title>
					<StyledImage source={logo} />
				</ComponentWrapper>
				<LoginWrapper>
					<Input value={null} placeholder="Email" />
					<Input value={null} placeholder="Password" />
					<ButtonWrapper>
						<Button
							onPress={function (event: GestureResponderEvent): void {
								throw new Error('Function not implemented.');
							}}
							title={'Login'}
							variant={'secondary'}
						/>
					</ButtonWrapper>
					<Link href={'/'}>Forgot your password?</Link>
				</LoginWrapper>
			</PageWrapper>
		</StyledWrapper>
	);
};

export default Login;
