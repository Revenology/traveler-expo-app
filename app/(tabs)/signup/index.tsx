import React, { useState } from 'react';
import { Image, SafeAreaView, TextInput } from 'react-native';
import defaultImage from '../../../assets/images/defaultProfile.png';
import {
	InputWrapper,
	StyledComponentWrapper,
	StyledWrapper,
	Title,
} from './Index.style';
import { UserDataProps } from '@/constants/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '@/components/common/button/Button';
import { Text } from '@/components/Themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
	validateEmail,
	validatePassword,
	validateUsername,
} from '@/utils/util';
import Input from '@/components/common/textinput/Input';

const Signup = () => {
	const [userData, setUserData] = useState<UserDataProps>({
		username: '',
		firstName: '',
		lastName: '',
		dob: new Date('1990-01-01'),
		email: '',
		password: '',
		phone: null,
	});
	const [errorData, setErrorData] = useState({
		username: false,
		firstName: false,
		lastName: false,
		dob: false,
		email: false,
		password: false,
		phone: null,
	});
	const [date, setDate] = useState(new Date('1990-01-01'));
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		// setShow(false);
		setDate(currentDate);
	};

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	// TODO: Implement checkFields
	const checkFields = async () => {
		await validateUsername(userData.username);
		validatePassword(userData.password);
		validateEmail(userData.email);
	};

	return (
		<StyledWrapper behavior="padding">
			<StyledComponentWrapper>
				{/* <TouchableOpacity>
					<Image source={defaultImage} />
				</TouchableOpacity> */}
				<InputWrapper>
					<Title>Welcome</Title>
				</InputWrapper>
				<Input
					label="Username"
					placeholder="username"
					value={userData.username}
					error={false}
					errorMessage="This username is already taken"
					onChangeText={(text) =>
						setUserData((prev) => ({ ...prev, username: text }))
					}
				/>
				<Input
					label="First name"
					placeholder="Indiana"
					value={userData.firstName}
					onChangeText={(text) =>
						setUserData((prev) => ({ ...prev, firstName: text }))
					}
				/>
				<Input
					label="Last name"
					placeholder="Traveler"
					value={userData.lastName}
					onChangeText={(text) =>
						setUserData((prev) => ({ ...prev, lastName: text }))
					}
				/>
				<Input
					label="Email"
					placeholder="email@email.com"
					error={userData.email.length != 0 && !validateEmail(userData.email)}
					errorMessage="Please input a valid email."
					value={userData.email}
					onChangeText={(text) =>
						setUserData((prev) => ({ ...prev, email: text }))
					}
				/>

				<Input
					label="Phone"
					placeholder="+61 ...."
					value={userData.phone}
					onChange={(text) =>
						setUserData((prev) => ({ ...prev, phone: Number(text) }))
					}
				/>
				<Input
					label="Password"
					placeholder="Password"
					value={userData.password}
					secureTextEntry
					onChange={(text) =>
						setUserData((prev) => ({
							...prev,
							password: text.nativeEvent.text,
						}))
					}
				/>
				<InputWrapper>
					<Text>Date of Birth</Text>
					<DateTimePicker
						testID="dateTimePicker"
						value={date}
						is24Hour={true}
						onChange={onChange}
					/>
				</InputWrapper>
				<Button
					onPress={() => console.log(userData)}
					title={'Signup'}
					variant={'primary'}
				/>
			</StyledComponentWrapper>
		</StyledWrapper>
	);
};

export default Signup;
