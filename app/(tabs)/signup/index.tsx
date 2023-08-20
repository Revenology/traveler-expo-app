import React, { useState } from 'react';
import { Image, SafeAreaView, TextInput } from 'react-native';
import defaultImage from '../../../assets/images/defaultProfile.png';
import {
	InputWrapper,
	StyledComponentWrapper,
	StyledWrapper,
	Title,
} from './index.style';
import { UserDataProps } from '@/constants/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '@/components/common/button/Button';
import { Text } from '@/components/Themed';
import DateTimePicker from '@react-native-community/datetimepicker';

const signup = () => {
	const [userData, setUserData] = useState<UserDataProps>({
		username: '',
		firstName: '',
		lastName: '',
		dob: new Date('1990-01-01'),
		email: '',
		password: '',
		phone: null,
	});
	const [date, setDate] = useState(new Date(1598051730000));
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

	const showTimepicker = () => {
		showMode('time');
	};

	return (
		<StyledWrapper behavior="padding">
			<StyledComponentWrapper>
				<TouchableOpacity>
					<Image source={defaultImage} />
				</TouchableOpacity>
				<Title>{userData.username}</Title>
				<InputWrapper>
					<TextInput
						value={userData.username}
						placeholder="username"
						onChangeText={(text) =>
							setUserData((prev) => ({ ...prev, username: text }))
						}
					/>
				</InputWrapper>
				<InputWrapper>
					<TextInput
						value={userData.firstName}
						placeholder="John"
						onChangeText={(text) =>
							setUserData((prev) => ({ ...prev, firstName: text }))
						}
					/>
				</InputWrapper>
				<InputWrapper>
					<TextInput
						value={userData.lastName}
						placeholder="Smith"
						onChangeText={(text) =>
							setUserData((prev) => ({ ...prev, lastName: text }))
						}
					/>
				</InputWrapper>
				<InputWrapper>
					<TextInput
						value={userData.email}
						placeholder="email"
						onChangeText={(text) =>
							setUserData((prev) => ({ ...prev, email: text }))
						}
					/>
				</InputWrapper>
				<InputWrapper>
					<TextInput
						value={userData.phone?.toString()}
						dataDetectorTypes={'phoneNumber'}
						placeholder="phone"
						onChange={(text) =>
							setUserData((prev) => ({ ...prev, phone: Number(text) }))
						}
					/>
				</InputWrapper>
				<Button onPress={showDatepicker} title="DOB" variant={'primary'} />
				{show && (
					<DateTimePicker
						testID="dateTimePicker"
						value={date}
						// mode={mode}
						is24Hour={true}
						onChange={onChange}
					/>
				)}
				<Button
					onPress={() => console.log(userData)}
					title={'Signup'}
					variant={'primary'}
				/>
			</StyledComponentWrapper>
			{/* <StyledComponentWrapper></StyledComponentWrapper> */}
		</StyledWrapper>
	);
};

export default signup;
