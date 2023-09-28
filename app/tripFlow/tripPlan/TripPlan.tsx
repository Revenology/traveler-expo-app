import CalendarPlan from '@/components/calendar/CalendarPlan';
import {
	BodyWrapper,
	FooterWrapper,
	HeaderWrapper,
	PageWrapper,
	PageWrapperSpace,
} from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import React, { useContext } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ButtonWrapper } from './TripPlan.styled';
import { useRouter } from 'expo-router';
import { MapDateContext } from '@/app/.appSetup/context';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '@/app/.appSetup/formSlice';
import { DestinationData, FormData } from '@/types/formData';
import { Title } from '@/components/common/Title';
import { View } from '@/components/Themed';
import LetsNavigator from '@/components/common/navigator/LetsNavigator';

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
		<View>
			<KeyboardAvoidingView>
				<PageWrapper>
					<HeaderWrapper>
						<Title>Dates</Title>
					</HeaderWrapper>
					<BodyWrapper>
						<CalendarPlan />
					</BodyWrapper>
					<FooterWrapper>
						<LetsNavigator
							back={() => router.back()}
							forward={() => checkDate()}
							backText="Cancel"
							forwardText="Add destination"
						/>
					</FooterWrapper>
				</PageWrapper>
			</KeyboardAvoidingView>
		</View>
	);
};

export default TripPlan;
