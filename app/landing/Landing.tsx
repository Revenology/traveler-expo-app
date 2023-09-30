import tile from '../../assets/blush/landing.png';
import React from 'react';
import {
  ImageContainer,
  ImageMain,
  StyledComponentWrapper,
  StyledWrapper,
  Title,
} from './Landing.style';
import { useRouter } from 'expo-router';
import Button from '@/components/common/button/Button';
import { Text } from '@/components/Themed';

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
          variant='primary'
          title='Test Feature'
          onPress={() => {
            router.push('/tripFlow/map/Map');
          }}
        />
        <Button
          variant='#1A1D21'
          title='Login'
          onPress={() => {
            router.push('/login/Login');
          }}
        />
        <Button
          variant='white'
          border='1px solid #1A1D21'
          color='#1A1D21'
          title='Sign up'
          onPress={() => {
            router.push('/signup/Signup');
          }}
        />
      </StyledComponentWrapper>
    </StyledWrapper>
  );
};

export default Landing;
