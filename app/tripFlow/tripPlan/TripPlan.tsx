import CalendarPlan from '@/components/calendar/CalendarPlan';
import { PageWrapperSpace } from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import React, { useContext } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ButtonWrapper } from './TripPlan.styled';
import { useRouter } from 'expo-router';
import { MapDateContext } from '@/app/.appSetup/context';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '@/app/.appSetup/formSlice';
import { DestinationData, FormData } from '@/types/formData';

const TripPlan = () => {
	const router = useRouter();
	const { mapDate } = useContext(MapDateContext);
	const dispatch = useDispatch();
	const formData = useSelector(
		(state: { formData: { value: FormData } }) => state.formData.value
	);

	const checkDate = () => {
		if (!mapDate.startDate || !mapDate.endDate) return;
		const tag = `${mapDate.city}-${mapDate.startDate}`;
		const convertObject: DestinationData = {
			city: mapDate.city,
			country: mapDate.country,
			startDate: mapDate.startDate,
			endDate: mapDate.endDate,
		};
		dispatch(updateFormData({ ...formData, [tag]: convertObject }));
		console.log(formData);
		router.back();
	};
	return (
		<KeyboardAvoidingView>
			<PageWrapperSpace>
				<CalendarPlan />
				<ButtonWrapper>
					<Button
						onPress={() => {
							checkDate();
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
