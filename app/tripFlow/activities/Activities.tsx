import { PageWrapper } from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import { useRouter } from 'expo-router';
import React from 'react';
import { useSelector } from 'react-redux';
import {
	ButtonWrapper,
	JourneyWrapper,
	ScrollViewWrapper,
} from './Activities.styled';
import { Title } from '@/components/common/Title';
import { View } from '@/components/Themed';
import JourneyCard from '@/components/common/journeyCard/JourneyCard';
import { DestinationData, FormData } from '@/types/formData';

const Activities = () => {
	const router = useRouter();
	const formData = useSelector(
		(state: { formData: { value: FormData } }) => state.formData.value
	);

	return (
		<PageWrapper>
			<Title>I am activities</Title>
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
