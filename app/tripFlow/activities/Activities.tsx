import { PageWrapper } from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import { useRouter } from 'expo-router';
import React from 'react';
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
import { View } from '@/components/Themed';
import { Title } from '@/components/common/Title';
import ActivityPill from '@/components/common/activityPill/ActivityPill';

const mockList = ['Adventure', 'Hangout', 'Local eats', 'Budget', 'Swimming'];

const getRandomHexColor = (): string => {
	// Generate a random number between 0 and 16777215 (2^24 - 1)
	const randomColor = Math.floor(Math.random() * 16777215);

	// Convert the number to a hexadecimal string and pad it to 6 digits
	const hexColor = randomColor.toString(16).padStart(6, '0');

	// Return the hexadecimal color code with a '#' prefix
	return `#${hexColor}`;
};

// Example usage:
const randomColor = getRandomHexColor();
console.log(randomColor);

const Activities = () => {
	const router = useRouter();
	const formData = useSelector(
		(state: { formData: { value: FormData } }) => state.formData.value
	);

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
				<TitleWrapper>
					<SecondaryTitle>Activities</SecondaryTitle>
					<PillWrapper>
						{mockList.map((item) => {
							const pillColor = getRandomHexColor();
							const circleColor = getRandomHexColor();
							return (
								<ActivityPill
									key={item}
									title={item}
									color={pillColor}
									circleColor={circleColor}
								/>
							);
						})}
					</PillWrapper>
				</TitleWrapper>
				<TitleWrapper>
					<SecondaryTitle>Food</SecondaryTitle>
					<PillWrapper>
						{mockList.map((item) => {
							const pillColor = getRandomHexColor();
							const circleColor = getRandomHexColor();
							return (
								<ActivityPill
									key={item}
									title={item}
									color={pillColor}
									circleColor={circleColor}
								/>
							);
						})}
					</PillWrapper>
				</TitleWrapper>
				<TitleWrapper>
					<SecondaryTitle>Accommodation</SecondaryTitle>
					<PillWrapper>
						{mockList.map((item) => {
							const pillColor = getRandomHexColor();
							const circleColor = getRandomHexColor();
							return (
								<ActivityPill
									key={item}
									title={item}
									color={pillColor}
									circleColor={circleColor}
								/>
							);
						})}
					</PillWrapper>
				</TitleWrapper>
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
