import {
  BodyWrapper,
  FooterWrapper,
  HeaderWrapper,
  PageWrapper,
} from '@/components/common/PageWrapper';
import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import pin from '../../../assets/images/pin.png';
import MapView, { Marker } from 'react-native-maps';
import { ButtonWrapper, WarningMessage, WarningWrapper } from './Map.styled';
import Button from '@/components/common/button/Button';
import AutoComplete, { Region } from '@/components/autoComplete/AutoComplete';
import { useRouter } from 'expo-router';
import { MapDateContext } from '@/app/.appSetup/context';
import { useSelector } from 'react-redux';
import { ICity } from 'country-state-city';
import LetsNavigator from '@/components/common/navigator/LetsNavigator';
import { Title } from '@/components/common/Title';

const Map = () => {
  const [region, setRegion] = useState<ICity>();
  const { mapDate } = useContext(MapDateContext);
  const [badMapDate, setBadMapDate] = useState(false);
  const formData = useSelector(
    (state: { formData: { value: FormData } }) => state.formData.value
  );
  const router = useRouter();

  const handleCalendarView = () => {
    if (mapDate.city) router.push('/tripFlow/tripPlan/TripPlan');
    console.log('Please select a destination');
  };

  const handleNext = () => {
    if (!mapDate.city || !mapDate.endDate) {
      setBadMapDate(true);
      return;
    }
    console.log(formData);
    router.push('/tripFlow/activities/Activities');
  };

  return (
    <KeyboardAvoidingView>
      <PageWrapper>
        <HeaderWrapper>
          <Title>Where to?</Title>
        </HeaderWrapper>
        <BodyWrapper>
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
                    latitude: Number(region?.latitude),
                    longitude: Number(region?.longitude),
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                  }
                : {
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
            }
            style={{
              width: '95%',
              height: '100%',
              borderRadius: 10,
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
            {region && (
              <Button
                onPress={() => handleCalendarView()}
                title={'Select dates'}
                variant={'primary'}
              />
            )}
          </ButtonWrapper>
          {badMapDate && (!mapDate.city || !mapDate.endDate) && (
            <WarningWrapper>
              <WarningMessage>
                Please select a location and dates
              </WarningMessage>
            </WarningWrapper>
          )}
        </BodyWrapper>
        <FooterWrapper>
          <LetsNavigator
            back={() => router.back()}
            forward={() => handleNext()}
            backText={'Cancel'}
            forwardText={'Next'}
          />
        </FooterWrapper>
      </PageWrapper>
    </KeyboardAvoidingView>
  );
};

export default Map;
