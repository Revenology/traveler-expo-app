import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { Image } from 'react-native';
import defaultImage from '../../../assets/images/defaultProfile.png';
import { StyledWrapper } from './index.styles';

const signup = () => {
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        phone: ''
    })
    return (
        <StyledWrapper>
            <Image source={defaultImage}/>
            <Text>This is the signup page</Text>
            
        </StyledWrapper>
    );
};

export default signup;