import { PageWrapper, PageWrapperSpace } from '@/components/common/PageWrapper';
import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import pin from '../../assets/images/pin.png';
import MapView, { Marker } from 'react-native-maps';
import { ButtonWrapper } from './Map.styled';
import Button from '@/components/common/button/Button';
import AutoComplete, { Region } from '@/components/autoComplete/AutoComplete';
import { useRouter } from 'expo-router';

const Map = () => {
	const [region, setRegion] = useState<Region>();
	const router = useRouter();
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
						onPress={() => router.push('/tripPlan/TripPlan')}
						title={'Select dates'}
						variant={'primary'}
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
