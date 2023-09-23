import { PageWrapper } from '@/components/common/PageWrapper';
import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import pin from '../../../assets/images/pin.png';
import MapView, { Marker } from 'react-native-maps';
import { ButtonWrapper } from './Map.styled';
import Button from '@/components/common/button/Button';
import AutoComplete, { Region } from '@/components/autoComplete/AutoComplete';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '@/app/.appSetup/formSlice';
import { FormData } from '@/types/formData';

const Map = () => {
	const [region, setRegion] = useState<Region>();
	const dispatch = useDispatch();
	const router = useRouter();
	const formData = useSelector(
		(state: { formData: { value: FormData } }) => state.formData.value
	);
	const [journeyData, setJourneyData] = useState<FormData>(formData);

	const handleNext = () => {
		dispatch(updateFormData({ ...formData, journeyData }));
		router.push('/tripFlow/activities/Activities');
	};

	// TODO: Implement calendar logic
	// const handleCalendarView = () => {
	// 	if (region) setJourneyData((prev) => {
	// 		prev[`${region.city}`] = {
	// 		}
	// 	})
	// };

	return (
		<KeyboardAvoidingView>
			<PageWrapper>
				<MapView
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					region={
						region
							? {
								latitude: region.lat,
								longitude: region.long,
								latitudeDelta: 1,
								longitudeDelta: 1,
							  }
							: {
								latitude: 37.78825,
								longitude: -122.4324,
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421,
							  }
					}
					style={{
						width: '90%',
						height: '70%',
						borderRadius: 10,
						zIndex: 2,
					}}
				>
					<Marker
						coordinate={
							region
								? {
									latitude: region.lat,
									longitude: region.long,
								  }
								: { latitude: 37.78825, longitude: -122.4324 }
						}
						title={region ? region.city : 'Default title'}
						description={region ? region.country : 'Default description'}
						image={pin}
					/>
				</MapView>
				<AutoComplete setState={setRegion} />
				<ButtonWrapper>
					<Button
						onPress={() => router.push('/tripFlow/tripPlan/TripPlan')}
						title={'Select dates'}
						variant={'primary'}
					/>
					<Button
						onPress={() => {
							handleNext();
						}}
						title="Next"
						variant="secondary"
					/>

					<Button
						onPress={() => router.back()}
						title={'Cancel'}
						variant={'secondary'}
					/>
				</ButtonWrapper>
			</PageWrapper>
		</KeyboardAvoidingView>
	);
};

export default Map;
