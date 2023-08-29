import { PageWrapper } from "@/components/common/PageWrapper";
import { Text, View } from "@/components/Themed";
// import baseImage from "../../assets/blush/login.png";
import Button from "@/components/common/button/Button";
import Input from "@/components/common/textinput/Input";
import React, { useState } from "react";
import { GestureResponderEvent, Image, Modal } from "react-native";
import {
    AssistText,
    ButtonWrapper,
    ComponentWrapper,
    LoginWrapper,
    StyledImage,
    StyledLink,
    StyledWrapper,
} from "./Index.style";
import { Title } from "@/components/common/Title";
import { Link } from "expo-router";
import HeroImage from "@/components/common/heroImage/HeroImage";
import { UserDataProps, LoginProps } from "@/constants/types";
import { response } from "msw";

const Login = () => {
    const [userData, setUserData] = useState<LoginProps>({
        username: "",
        password: "",
    });

    const login = (event: any) => {
        event.preventDefault;
        console.log(userData);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userName: userData.username,
                password: userData.password,
            }),
        };
        fetch("http://192.168.0.219:8080/users/login", requestOptions)
            .then((response) => response.json)
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
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
                    {/* <HeroImage source={baseImage} /> */}
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
                            onPress={login}
                            title={"Login"}
                            variant={"primary"}
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
