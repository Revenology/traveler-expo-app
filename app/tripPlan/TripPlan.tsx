import { Text } from '@/components/Themed';
import CalendarPlan from '@/components/calendar/CalendarPlan';
import { PageWrapper } from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/textinput/Input';
import ProgressStepper from '@/components/progressStepper/ProgressStepper';
import React, { useState } from 'react';
import { GestureResponderEvent, KeyboardAvoidingView } from 'react-native';
import { ButtonWrapper, SearchWrapper } from './TripPlan.styled';

interface FormData {
	tripName?: string;
	startDate?: string;
	endDate?: string;
	destination: string;
}

const TripPlan = () => {
	const [formData, setFormData] = useState<FormData>({ destination: '' });

	const handleTextChange = (key: any, text: string) => {
		setFormData((prev) => {
			return { ...prev, [key]: text };
		});
	};
	return (
		<KeyboardAvoidingView>
			<PageWrapper>
				<SearchWrapper>
					<Input
						value={formData.destination}
						placeholder="Search"
						onChangeText={(text) => handleTextChange('destination', text)}
					/>
				</SearchWrapper>
				<CalendarPlan />
				<ButtonWrapper>
					<Button
						onPress={function (event: GestureResponderEvent): void {
							throw new Error('Function not implemented.');
						}}
						title={'Add destination'}
						variant={'primary'}
					/>
					{/* <ProgressStepper /> */}

					<Button
						onPress={function (event: GestureResponderEvent): void {
							throw new Error('Function not implemented.');
						}}
						title={'Next'}
						variant={'secondary'}
					/>
				</ButtonWrapper>
			</PageWrapper>
		</KeyboardAvoidingView>
	);
};

export default TripPlan;
