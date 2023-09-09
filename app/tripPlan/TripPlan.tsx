import { Text } from '@/components/Themed';
import CalendarPlan from '@/components/calendar/CalendarPlan';
import { PageWrapper } from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/textinput/Input';
import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ButtonWrapper, SearchWrapper } from './TripPlan.styled';

export interface FormData {
	tripName?: string;
	startDate?: string;
	endDate?: string;
	destination: string;
}

const TripPlan = () => {
	const [formData, setFormData] = useState<FormData>({ destination: '' });

	const handleTextChange = (key: string, text: string) => {
		setFormData((prev) => {
			return { ...prev, [key]: text };
		});
	};

	const checkDate = () => {
		if (!formData.startDate || !formData.endDate) return;
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
				<CalendarPlan setFormData={setFormData} />
				<ButtonWrapper>
					<Button
						onPress={() => checkDate()}
						title={'Add destination'}
						variant={'primary'}
					/>
					{/* <ProgressStepper /> */}

					<Button
						onPress={() => console.log('removedDates')}
						title={'Cancel'}
						variant={'secondary'}
					/>
				</ButtonWrapper>
			</PageWrapper>
		</KeyboardAvoidingView>
	);
};

export default TripPlan;
