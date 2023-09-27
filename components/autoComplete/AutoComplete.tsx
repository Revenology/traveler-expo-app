import React, { useContext, useState } from 'react';
import Input from '../common/textinput/Input';
import {
	IconImage,
	ScreenWrapper,
	StyledList,
	StyledPressable,
	StyledText,
} from './AutoComplete.styled';
import { MapDateContext } from '@/app/.appSetup/context';
import { getCity } from '@/utils/mapUtils';
import { ICity } from 'country-state-city';
import { Image } from 'react-native';
import location from '../../assets/images/location.png';

export interface Region {
	country: string;
	city: string;
	lat: number;
	long: number;
}

const AutoComplete = ({
	setState,
}: {
	setState: React.Dispatch<React.SetStateAction<ICity | undefined>>;
}) => {
	const [text, setText] = useState('');
	const [data, setData] = useState<ICity[]>([]);
	const [dropVis, setDropVis] = useState(false);
	const { setMapDate } = useContext(MapDateContext);

	const onPress = (item: ICity) => {
		setState(item);
		setMapDate((prev) => {
			prev.city = item.name;
			prev.country = item.countryCode;
			return prev;
		});
	};
	const updateSearchList = (word: string) => {
		setText(word);
		if (word.length < 4) return;
		setData(getCity(word));
	};

	const ListItem = ({
		name,
		countryCode,
		latitude,
		longitude,
		stateCode,
	}: ICity) => (
		<StyledPressable
			onPress={() => {
				onPress({
					countryCode,
					name,
					latitude,
					longitude,
					stateCode,
				}),
				setDropVis(false),
				setText(`${name}, ${countryCode}`);
			}}
		>
			<IconImage source={location} />
			<StyledText>{`${name} ${stateCode}, ${countryCode}`}</StyledText>
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
				<StyledList
					data={data}
					renderItem={({ item }: { item: ICity }) => {
						return (
							<ListItem
								countryCode={item.countryCode}
								name={item.name}
								latitude={item.latitude}
								longitude={item.longitude}
								stateCode={item.stateCode}
							/>
						);
					}}
				/>
			)}
		</ScreenWrapper>
	);
};

export default AutoComplete;
