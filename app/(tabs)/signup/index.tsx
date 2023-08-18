import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { Image, TextInput } from 'react-native';
import defaultImage from '../../../assets/images/defaultProfile.png';
import { InputWrapper, StyledComponentWrapper, StyledWrapper, Title } from './index.style';
import { UserDataProps } from '@/constants/types';
import { TouchableOpacity } from 'react-native-gesture-handler';

const signup = () => {
    const [userData, setUserData] = useState<UserDataProps>({
        username: 'hi',
        firstName: '',
        lastName: '',
        dob: new Date("1990-01-01"),
        email: '',
        password: '',
        phone: null,
    })
    return (
        <StyledWrapper>
            <StyledComponentWrapper>
                <TouchableOpacity>
                  <Image source={defaultImage}/>
                </TouchableOpacity>
                <Title>This is the signup page</Title>
                <InputWrapper>
                    <TextInput value={userData.username} onChangeText={(text) => setUserData((prev) => ({...prev, username: text}))}/>
                </InputWrapper>
                <InputWrapper>
                    <TextInput value={userData.firstName} onChangeText={(text) => setUserData((prev) => ({...prev, username: text}))}/>
                </InputWrapper>
                <InputWrapper>
                    <TextInput value={userData.lastName} onChangeText={(text) => setUserData((prev) => ({...prev, username: text}))}/>
                </InputWrapper>
                <InputWrapper>
                    <TextInput value={userData.username} onChangeText={(text) => setUserData((prev) => ({...prev, username: text}))}/>
                </InputWrapper>
            </StyledComponentWrapper>
        </StyledWrapper>
    );
};

export default signup;