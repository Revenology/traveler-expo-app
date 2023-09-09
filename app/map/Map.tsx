import { Text } from '@/components/Themed';
import { PageWrapper } from '@/components/common/PageWrapper';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import pin from '../../assets/images/pin.png';
import MapView, { Marker } from 'react-native-maps';
import Input from '@/components/common/textinput/Input';
import { ButtonWrapper, SearchWrapper } from './Map.styled';
import Button from '@/components/common/button/Button';

const Map = () => {
	return (
		<KeyboardAvoidingView>
			<PageWrapper>
				<SearchWrapper>
					<Input
						value={''}
						placeholder="Search"
						onChangeText={(text) => console.log(text)}
					/>
				</SearchWrapper>

				<MapView
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					style={{ width: '80%', height: '50%', borderRadius: 10 }}
				>
					<Marker
						coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
						title={'hello'}
						description="This is a description"
						image={pin}
					/>
				</MapView>
				<ButtonWrapper>
					<Button
						onPress={() => console.log('pressed')}
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

export default Map;
