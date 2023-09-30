import {
  BodyWrapper,
  FooterWrapper,
  HeaderWrapper,
  PageWrapper,
} from '@/components/common/PageWrapper';
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
} from './Login.style';
import { Title } from '@/components/common/Title';
import HeroImage from '@/components/common/heroImage/HeroImage';
import { LoginProps } from '@/constants/types';
import { userLogin } from '@/utils/user.util';
import { InputWrapper } from '../signup/Signup.style';

const Login = () => {
  const [userData, setUserData] = useState<LoginProps>({
    username: '',
    password: '',
  });

  const handleLogin = () => {
    userLogin(userData);
  };

  // const handleChange = (text: any, name: string) => {
  // 	console.log(text.nativeEvent);
  // 	setUserData({ ...userData, [name]: text.nativeEvent.text });
  // };

  return (
    <StyledWrapper behavior='position'>
      <PageWrapper>
        <HeaderWrapper>
          <Title>Welcome back!</Title>
        </HeaderWrapper>
        <BodyWrapper>
          <HeroImage sourceUrl={loginImage} />
          <AssistText>Login</AssistText>
          <Input
            onChangeText={(text) =>
              setUserData((oldData) => ({
                ...oldData,
                username: text,
              }))
            }
            value={userData.username}
            placeholder='Email or Username'
          />
          <Input
            onChange={(text: any) =>
              setUserData((oldData) => ({
                ...oldData,
                password: text.nativeEvent.text,
              }))
            }
            value={userData.password}
            placeholder='Password'
          />
        </BodyWrapper>
        <FooterWrapper>
          <ButtonWrapper>
            <Button
              onPress={() => handleLogin()}
              title={'Login'}
              variant={'primary'}
            />
          </ButtonWrapper>
        </FooterWrapper>
      </PageWrapper>
    </StyledWrapper>
  );
};

export default Login;
