import React from 'react';
import { Calendar } from 'react-native-calendars';

const CalendarPlan = () => {
	return (
		<>
			<Calendar
				markingType={'period'}
				markedDates={{
					'2023-09-20': { textColor: 'green' },
					'2023-09-22': { startingDay: true, color: 'green' },
					'2023-09-23': {
						selected: true,
						endingDay: true,
						color: 'green',
						textColor: 'gray',
					},
					'2023-09-04': {
						disabled: true,
						startingDay: true,
						color: 'green',
						endingDay: true,
					},
				}}
				style={{ width: 350 }}
				onDayPress={(day) => {
					console.log('selected day', day);
				}}
			/>
		</>
	);
};

export default CalendarPlan;
