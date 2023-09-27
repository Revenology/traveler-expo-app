import ActivityPill from '@/components/common/activityPill/ActivityPill';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PillWrapper } from './Activities.styled';

const ActivityList = ({
	listType,
	onPress,
	items,
}: {
	listType: string;
	onPress: any;
	items: any;
}) => {
	return (
		<PillWrapper>
			{listType == 'activities'
				? activities
					.filter((key) => !items.activities?.includes(key))
					.map((item) => {
						return (
							<TouchableOpacity
								key={item}
								onPress={() => onPress(listType, item)}
							>
								<ActivityPill
									title={item}
									color={'gray'}
									circleColor={'black'}
								/>
							</TouchableOpacity>
						);
					})
				: listType == 'cuisine'
					? cuisines
						.filter((key) => !items.cuisine?.includes(key))
						.map((item) => {
							return (
								<TouchableOpacity
									key={item}
									onPress={() => onPress(listType, item)}
								>
									<ActivityPill
										title={item}
										color={'gray'}
										circleColor={'black'}
									/>
								</TouchableOpacity>
							);
						})
					: accommodationTypes
						.filter((key) => !items.accommodation?.includes(key))
						.map((item) => {
							return (
								<TouchableOpacity
									key={item}
									onPress={() => onPress(listType, item)}
								>
									<ActivityPill
										title={item}
										color={'gray'}
										circleColor={'black'}
									/>
								</TouchableOpacity>
							);
						})}
		</PillWrapper>
	);
};

export const activities = [
	'Relaxing',
	'Exploring',
	'Sightseeing',
	'Swimming',
	'Sunbathing',
	'Hiking',
	'Shopping',
	'Boating',
	'Dining',
	'Picnicking',
	'Photography',
	'Museum-hopping',
	'Partying',
	'Reading',
	'Spa',
	'Fishing',
	'Cycling',
	'Snorkeling',
	'Skiing',
	'Golfing',
];

export const cuisines = [
	'Italian',
	'Mexican',
	'Japanese',
	'Chinese',
	'Indian',
	'Thai',
	'French',
	'Greek',
	'Spanish',
	'Mediterranean',
	'Middle Eastern',
	'Korean',
	'American',
	'Vietnamese',
	'Brazilian',
	'Cajun',
	'German',
	'Russian',
	'Caribbean',
	'African',
];

export const accommodationTypes = [
	'Hotel',
	'Motel',
	'Hostel',
	'Resort',
	'Inn',
	'Cottage',
	'Villa',
	'Cabin',
	'Guesthouse',
	'BedandBreakfast',
	'VacationRental',
	'Campsite',
	'Treehouse',
	'Boat',
	'Ranch',
	'Castle',
	'Apartment',
	'Bungalow',
	'Chalet',
	'Lodge',
];

export default ActivityList;
