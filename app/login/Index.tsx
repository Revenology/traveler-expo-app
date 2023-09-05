import { PageWrapper } from '@/components/common/PageWrapper';
import loginImage from '../../assets/blush/login.png';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/textinput/Input';
import React, { useState } from 'react';
import {
	AssistText,
	ButtonWrapper,
	ComponentWrapper,
	LoginWrapper,
	StyledWrapper,
} from './Index.style';
import { Title } from '@/components/common/Title';
import HeroImage from '@/components/common/heroImage/HeroImage';
import { LoginProps } from '@/constants/types';
import { userLogin } from '@/utils/user.util';

const Login = () => {
	const [userData, setUserData] = useState<LoginProps>({
		username: '',
		password: '',
	});

	const handleLogin = () => {
		userLogin(userData);
	};

	const handleChange = (text: any, name: string) => {
		console.log(text.nativeEvent);
		setUserData({ ...userData, [name]: text.nativeEvent.text });
	};

	return (
		<StyledWrapper behavior="position">
			<PageWrapper>
				<ComponentWrapper>
					<Title>Welcome back!</Title>
					<HeroImage sourceUrl={loginImage} />
				</ComponentWrapper>
				<LoginWrapper>
					<AssistText>Login</AssistText>
					<Input
						onChangeText={(text) =>
							setUserData((oldData) => ({
								...oldData,
								username: text,
							}))
						}
						value={userData.username}
						placeholder="Email or Username"
					/>
					<Input
						onChange={(text: any) =>
							setUserData((oldData) => ({
								...oldData,
								password: text.nativeEvent.text,
							}))
						}
						value={userData.password}
						placeholder="Password"
					/>
					<ButtonWrapper>
						<Button
							onPress={() => handleLogin()}
							title={'Login'}
							variant={'primary'}
						/>
					</ButtonWrapper>
					{/* <StyledLink href={'/(tabs)/landing/Index'}>
						Forgot your password?
					</StyledLink> */}
					{/* <StyledLink href={'/'}>Already have an account?</StyledLink> */}
				</LoginWrapper>
			</PageWrapper>
		</StyledWrapper>
	);
};

export default Login;
