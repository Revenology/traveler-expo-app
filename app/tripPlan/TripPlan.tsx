import { Text } from '@/components/Themed';
import CalendarPlan from '@/components/calendar/CalendarPlan';
import { PageWrapper } from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import React from 'react';
import { GestureResponderEvent, KeyboardAvoidingView } from 'react-native';

const TripPlan = () => {
	return (
		<KeyboardAvoidingView>
			<PageWrapper>
				<Text>This is the search bar</Text>
				<CalendarPlan />
				<Button
					onPress={function (event: GestureResponderEvent): void {
						throw new Error('Function not implemented.');
					}}
					title={'Add destination'}
					variant={'primary'}
				/>
				<Button
					onPress={function (event: GestureResponderEvent): void {
						throw new Error('Function not implemented.');
					}}
					title={'Next'}
					variant={'secondary'}
				/>
			</PageWrapper>
		</KeyboardAvoidingView>
	);
};

export default TripPlan;
