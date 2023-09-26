import { PageWrapper } from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
	BodyWrapper,
	ButtonWrapper,
	JourneyWrapper,
	PillWrapper,
	ScrollViewWrapper,
	SecondaryTitle,
	TitleWrapper,
} from './Activities.styled';
import JourneyCard from '@/components/common/journeyCard/JourneyCard';
import { DestinationData, FormData } from '@/types/formData';
import { Title } from '@/components/common/Title';
import ActivityPill from '@/components/common/activityPill/ActivityPill';
import AddButton from '@/components/common/addButton/AddButton';
import ActivityList from './ActivityList';
import { Text } from '@/components/Themed';

const Activities = () => {
	const router = useRouter();
	const formData = useSelector(
		(state: { formData: { value: FormData } }) => state.formData.value
	);
	const [showPills, setShowPills] = useState(true);
	const [listType, setListType] = useState('activities');
	const [items, setItems] = useState({
		activities: [],
		cuisine: [],
		accomomodation: [],
	});

	const handlePress = (pillType: string) => {
		setListType(pillType);
		setShowPills(!showPills);
	};

	const addTypesToList = (category: string, value: string) => {
		setItems((prev) => {
			const temp = prev[category];
			console.log(temp);
			temp.push(value);
			return { ...prev, [category]: temp };
		});
	};

	return (
		<PageWrapper>
			<TitleWrapper>
				<Title>Select location</Title>
			</TitleWrapper>
			<ScrollViewWrapper>
				<JourneyWrapper horizontal={true}>
					{Object.values(formData).map((journey: DestinationData) => {
						return (
							<JourneyCard
								key={`${journey.city}-${journey.startDate}`}
								journey={journey}
							/>
						);
					})}
				</JourneyWrapper>
			</ScrollViewWrapper>
			<BodyWrapper>
				{showPills && (
					<>
						<TitleWrapper>
							<SecondaryTitle>Activities</SecondaryTitle>
							<PillWrapper>
								{items.activities?.map((item) => {
									return (
										<ActivityPill
											key={item}
											title={item}
											color="gray"
											circleColor="black"
										/>
									);
								})}
								<AddButton onPress={() => handlePress('activities')} />
							</PillWrapper>
						</TitleWrapper>
						<TitleWrapper>
							<SecondaryTitle>Cuisine</SecondaryTitle>
							<PillWrapper>
								{items.cuisine?.map((item) => {
									return (
										<ActivityPill
											key={item}
											title={item}
											color="gray"
											circleColor="black"
										/>
									);
								})}
								<AddButton onPress={() => handlePress('cuisine')} />
							</PillWrapper>
						</TitleWrapper>
						<TitleWrapper>
							<SecondaryTitle>Accommodation</SecondaryTitle>
							<PillWrapper>
								{items.accomomodation?.map((item) => {
									return (
										<ActivityPill
											key={item}
											title={item}
											color="gray"
											circleColor="black"
										/>
									);
								})}
								<AddButton onPress={() => handlePress('accomomodation')} />
							</PillWrapper>
						</TitleWrapper>
					</>
				)}
				{!showPills && (
					<>
						<SecondaryTitle>Add {listType}</SecondaryTitle>
						<ActivityList
							listType={listType}
							onPress={addTypesToList}
							items={items}
						/>
						<AddButton onPress={() => setShowPills(!showPills)} />
					</>
				)}
			</BodyWrapper>
			<ButtonWrapper>
				<Button
					variant="primary"
					onPress={() => {
						router.push('/tripFlow/collaborate/Collaborate');
						console.log('Pressed');
					}}
					title="Next"
				/>
				<Button
					variant="secondary"
					title="Back"
					onPress={() => {
						router.back();
					}}
				/>
			</ButtonWrapper>
		</PageWrapper>
	);
};

export default Activities;
