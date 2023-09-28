import CalendarPlan from '@/components/calendar/CalendarPlan';
import {
	BodyWrapper,
	FooterWrapper,
	HeaderWrapper,
	PageWrapper,
	PageWrapperSpace,
} from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ButtonWrapper } from './TripPlan.styled';
import { useRouter } from 'expo-router';
import { MapDateContext } from '@/app/.appSetup/context';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '@/app/.appSetup/formSlice';
import { DestinationData, FormData } from '@/types/formData';
import { Title } from '@/components/common/Title';
import { Text, View } from '@/components/Themed';
import LetsNavigator from '@/components/common/navigator/LetsNavigator';
import { JourneyWrapper } from '../activities/Activities.styled';
import JourneyCard from '@/components/common/journeyCard/JourneyCard';

const TripPlan = () => {
	const router = useRouter();
	const { mapDate } = useContext(MapDateContext);

	const dispatch = useDispatch();
	const formData = useSelector(
		(state: { formData: { value: FormData } }) => state.formData.value
	);
	const [activeLeg, setActiveLeg] = useState(Object.keys(formData)[0]);

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
		router.back();
	};
	return (
		<View>
			<KeyboardAvoidingView>
				<PageWrapper>
					<HeaderWrapper>
						<Title>When is your trip?</Title>
					</HeaderWrapper>
					<BodyWrapper>
						<JourneyWrapper horizontal={true}>
							{Object.entries(formData).map((item) => {
								const [key, value] = item;
								return (
									<JourneyCard
										key={`${value.city}-${value.startDate}`}
										journey={value}
										isActive={activeLeg == key}
										onPress={() => setActiveLeg(key)}
									/>
								);
							})}
						</JourneyWrapper>
						<Text>Current Trips</Text>
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
