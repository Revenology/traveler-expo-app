import { Button, Image, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../../../assets/images/logo.png';
import React from 'react';
import { StyledComponentWrapper, StyledImage, StyledLine, StyledWrapper, Title } from './index.styles';

const landing = () => {
    return (
        <StyledWrapper>
          <StyledComponentWrapper>
            <Title>Traveler</Title>
            <Image source={logo} style={styles.image}/>
          </StyledComponentWrapper>
          <StyledComponentWrapper>
             <Button color={'green'} title='Login' onPress={()=> {console.log('This is a login button')}}/>
              <Button title='Signup' onPress={()=> {console.log('This is a signup button')}}/>
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