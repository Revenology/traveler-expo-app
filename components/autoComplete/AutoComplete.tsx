import React, { useImperativeHandle, useRef, useState } from 'react';
import { View, Text } from '../Themed';
import { FlatList, Pressable } from 'react-native';
import Input from '../common/textinput/Input';

export interface Region {
	country: string;
	city: string;
	lat: number;
	long: number;
}

const AutoComplete = ({ setState }) => {
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
	const [text, setText] = useState('');
	const [data, setData] = useState(dataFaker);
	const [dropVis, setDropVis] = useState(false);

	const onPress = (item: Region) => {
		setState(item);
		console.log(item);
	};
	const updateSearchList = (item: string) => {
		setText(item);
		setData(() => {
			return dataFaker.filter(
				(place) =>
					place.city.toLowerCase().startsWith(item.toLowerCase()) ||
					place.country.toLowerCase().startsWith(item.toLowerCase())
			);
		});
	};

	return (
		<View
			style={{
				backgroundColor: '',
				width: '100%',
				padding: 0,
				margin: 0,
				borderRadius: 10,
				alignItems: 'center',
				position: 'absolute',
				top: 75,
				zIndex: 3,
			}}
		>
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
					style={{
						width: '80%',
						borderRadius: 10,
						position: 'absolute',
						backgroundColor: 'rgba(255,255,255,0.5)',
						top: 50,
					}}
					renderItem={({ item }) => (
						<Pressable
							onPress={() => {
								onPress(item),
								setDropVis(false),
								setText(`${item.city}, ${item.country}`);
							}}
							style={{
								alignItems: 'center',
								margin: 5,
								padding: 5,
								backgroundColor: 'red',
								borderRadius: 10,
							}}
						>
							<Text
								style={{ color: 'white' }}
							>{`${item.city}, ${item.country}`}</Text>
						</Pressable>
					)}
				/>
			)}
		</View>
	);
};

export default AutoComplete;
