import { MapDateContext } from '@/app/.appSetup/context';
import React, { useContext, useState } from 'react';
import { Calendar } from 'react-native-calendars';

interface DayProps {
	dateString: string;
	day: number;
	month: number;
	timestamp: number;
	year: number;
}
interface TempData {
	[key: string]: {
		[key: string]: string;
	};
}

const CalendarPlan = () => {
	//TODO: Extrat datatype of Calendar
	const [dateData, setDateData] = useState<{
		[key: string]: { [key: string]: unknown };
	}>({});
	const { setMapDate } = useContext(MapDateContext);

	const getDatesBetween = (startDate: string, endDate: string): string[] => {
		const betweenArray: string[] = [];
		const currentDate = new Date(startDate);
		const convertEndDate = new Date(endDate);
		currentDate.setDate(currentDate.getDate() + 1);

		while (currentDate < convertEndDate) {
			betweenArray.push(new Date(currentDate).toISOString().slice(0, 10));
			currentDate.setDate(currentDate.getDate() + 1);
		}

		return betweenArray;
	};

	const handleDateSelection = ({ dateString }: DayProps) => {
		const keys: string[] = Object.keys(dateData);

		if (
			keys.length == 0 ||
			(keys && keys.length >= 2) ||
			(keys.length < 2 && Date.parse(dateString) < Date.parse(keys[0]))
		) {
			setDateData({
				[dateString]: {
					startingDay: true,
					endingDay: true,
					marked: true,
					color: 'red',
					textColor: 'white',
				},
			});
			setMapDate((prev) => {
				return { ...prev, startDate: dateString, endDate: '' };
			});
		}
		if (
			keys &&
			keys.length < 2 &&
			Date.parse(dateString) > Date.parse(keys[0])
		) {
			setMapDate((prev) => {
				return { ...prev, endDate: dateString };
			});
			setDateData((prev) => {
				const tempData: TempData = {};
				const datesBetween = getDatesBetween(keys[0], dateString);
				for (const date of datesBetween) {
					tempData[date] = { color: 'red', textColor: 'white' };
				}
				const newPrev = { [keys[0]]: { ...prev[keys[0]], endingDay: false } };
				return {
					...newPrev,
					...tempData,
					[dateString]: {
						endingDay: true,
						marked: true,
						color: 'red',
						textColor: 'white',
					},
				};
			});
		}
	};
	return (
		<>
			<Calendar
				markingType={'period'}
				markedDates={dateData}
				style={{ width: 350 }}
				onDayPress={(day) => {
					handleDateSelection(day);
				}}
			/>
		</>
	);
};

export default CalendarPlan;
