import React, { useState } from "react";
import signup from "../../assets/blush/signup.png";
import {
    AssistText,
    ComponentWrapper,
    StyledComponentWrapper,
    StyledWrapper,
} from "./Index.style";
import { UserDataProps } from "@/constants/types";
import Button from "@/components/common/button/Button";
import {
    validateEmail,
    validatePassword,
    validateUsername,
} from "@/utils/util";
import Input from "@/components/common/textinput/Input";
import { PageWrapper } from "@/components/common/PageWrapper";
import HeroImage from "@/components/common/heroImage/HeroImage";
import { Title } from "@/components/common/Title";

const Signup = () => {
    const [userData, setUserData] = useState<UserDataProps>({
        username: "",
        firstName: "",
        lastName: "",
        dob: new Date("1990-01-01"),
        email: "",
        password: "",
        phone: null,
    });

    // TODO: Implement checkFields
    // const checkFields = async () => {
    // 	await validateUsername(userData.username);
    // 	validatePassword(userData.password);
    // 	validateEmail(userData.email);
    // };

    return (
        <StyledWrapper behavior="position">
            <PageWrapper>
                <StyledComponentWrapper>
                    <ComponentWrapper>
                        <Title>Hey there!</Title>
                        <HeroImage source={signup} />
                    </ComponentWrapper>
                    <AssistText>Sign up</AssistText>
                    <Input
                        label="name"
                        placeholder="Name"
                        value={userData.firstName}
                        onChangeText={(text) =>
                            setUserData((prev) => ({
                                ...prev,
                                firstName: text,
                            }))
                        }
                    />

                    <Input
                        label="Email"
                        placeholder="Email"
                        error={
                            userData.email.length != 0 &&
                            !validateEmail(userData.email)
                        }
                        errorMessage="Please input a valid email."
                        value={userData.email}
                        onChangeText={(text) =>
                            setUserData((prev) => ({ ...prev, email: text }))
                        }
                    />
                    <Input
                        label="Password"
                        placeholder="Password"
                        value={userData.password}
                        secureTextEntry
                        onChange={(text: any) =>
                            setUserData((prev) => ({
                                ...prev,
                                password: text.nativeEvent.text,
                            }))
                        }
                    />
                    <Button
                        onPress={() => console.log(userData)}
                        title={"Signup"}
                        variant={"secondary"}
                    />
                </StyledComponentWrapper>
            </PageWrapper>
        </StyledWrapper>
    );
};

export default Signup;
