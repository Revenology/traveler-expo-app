import CalendarPlan from '@/components/calendar/CalendarPlan';
import { PageWrapper, PageWrapperSpace } from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/textinput/Input';
import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ButtonWrapper, SearchWrapper } from './TripPlan.styled';
import { useRouter } from 'expo-router';

export interface FormData {
	tripName?: string;
	startDate?: string;
	endDate?: string;
	destination: string;
}

const TripPlan = () => {
	const [formData, setFormData] = useState<FormData>({ destination: '' });
	const router = useRouter();

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
			<PageWrapperSpace>
				<CalendarPlan setFormData={setFormData} />
				<ButtonWrapper>
					<Button
						onPress={() => {
							checkDate(), router.back();
						}}
						title={'Add destination'}
						variant={'primary'}
					/>
					{/* <ProgressStepper /> */}

					<Button
						onPress={() => router.back()}
						title={'Cancel'}
						variant={'secondary'}
					/>
				</ButtonWrapper>
			</PageWrapperSpace>
		</KeyboardAvoidingView>
	);
};

export default TripPlan;
