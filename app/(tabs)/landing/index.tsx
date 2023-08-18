import { Button, Image, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../../../assets/images/logo.png';
import React from 'react';
import { StyledComponentWrapper, StyledImage, StyledLine, StyledWrapper, Title } from './index.style';
import { useRouter } from 'expo-router';

const landing = () => {
  const router = useRouter();

    return (
        <StyledWrapper>
          <StyledComponentWrapper>
            <Title>Traveler</Title>
            <Image source={logo} style={styles.image}/>
          </StyledComponentWrapper>
          <StyledComponentWrapper>
             <Button color={'green'} title='Login' onPress={()=> {router.push('/(tabs)/login/')}}/>
              <Button title='Signup' onPress={()=> {router.push('/(tabs)/signup/')}}/>
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
      resizeMode: 'stretch'
    }
  });

export default landing;