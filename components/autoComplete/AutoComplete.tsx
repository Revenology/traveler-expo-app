import React, { useContext, useState } from 'react';
import { FlatList } from 'react-native';
import Input from '../common/textinput/Input';
import {
	ScreenWrapper,
	StyledPressable,
	StyledText,
} from './AutoComplete.styled';
import { MapDateContext } from '@/app/.appSetup/context';

export interface Region {
	country: string;
	city: string;
	lat: number;
	long: number;
}

const dataFaker: Region[] = [
	{ country: 'Australia', city: 'Sydney', lat: -33.8688, long: 151.2093 },
	{
		country: 'New Zealand',
		city: 'Auckland',
		lat: -36.8509,
		long: 174.7645,
	},
	{
		country: 'Japan',
		city: 'Tokyo',
		lat: 35.6762,
		long: 139.6503,
	},
];

const AutoComplete = ({
	setState,
}: {
	setState: React.Dispatch<React.SetStateAction<Region | undefined>>;
}) => {
	const [text, setText] = useState('');
	const [data, setData] = useState(dataFaker);
	const [dropVis, setDropVis] = useState(false);
	const { setMapDate } = useContext(MapDateContext);

	const onPress = (item: Region) => {
		setState(item);
		setMapDate((prev) => {
			prev.city = item.city;
			prev.country = item.country;
			console.log('This is the updated value: ', prev);
			return prev;
		});
		console.log(item);
	};
	const updateSearchList = (word: string) => {
		setText(word);
		setData(() => {
			return dataFaker.filter(
				(place) =>
					place.city.toLowerCase().startsWith(word.toLowerCase()) ||
					place.country.toLowerCase().startsWith(word.toLowerCase())
			);
		});
	};

	const ListItem = ({ country, city, lat, long }: Region) => (
		<StyledPressable
			onPress={() => {
				onPress({ country, city, lat, long }),
				setDropVis(false),
				setText(`${city}, ${country}`);
			}}
		>
			<StyledText>{`${city}, ${country}`}</StyledText>
		</StyledPressable>
	);

	return (
		<ScreenWrapper>
			<Input
				value={text}
				placeholder="Search"
				onChangeText={(item) => {
					updateSearchList(item);
					setDropVis(true);
				}}
				onFocus={() => setDropVis(true)}
				onBlur={() => setDropVis(false)}
			/>
			{dropVis && (
				<FlatList
					data={data}
					renderItem={({ item }: { item: Region }) => {
						return (
							<ListItem
								country={item.country}
								city={item.city}
								lat={item.lat}
								long={item.long}
							/>
						);
					}}
				/>
			)}
		</ScreenWrapper>
	);
};

export default AutoComplete;
