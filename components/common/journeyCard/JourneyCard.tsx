import { DestinationData } from '@/types/formData';
import React from 'react';
import {
	CardWrapper,
	InlineWrapper,
	WeightText,
	Wrapper,
} from './JourneyCard.styled';

const formatDate = (inputDate: string) => {
	const date = new Date(inputDate);
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'short',
	};
	return date.toLocaleDateString('en-US', options);
};

const countDays = (startDate: Date, endDate: Date): number => {
	const startMillis = startDate.getTime();
	const endMillis = endDate.getTime();
	const differenceMillis = endMillis - startMillis;
	const daysDifference = Math.floor(differenceMillis / (1000 * 60 * 60 * 24));
	return daysDifference;
};

const JourneyCard = ({ journey }: { journey: DestinationData }) => {
	const dayCount =
		journey.startDate && journey.endDate
			? countDays(new Date(journey.startDate), new Date(journey.endDate))
			: 0;

	return (
		<CardWrapper>
			<Wrapper>
				<WeightText $weight={500}>{journey.city}</WeightText>
				<WeightText $weight={200}>{journey.country}</WeightText>
			</Wrapper>
			<InlineWrapper>
				<WeightText $weight={800}>{dayCount}</WeightText>
				<WeightText $weight={500}>Days</WeightText>
			</InlineWrapper>
			<WeightText>{`${
				journey.startDate ? formatDate(journey.startDate) : 0
			} - ${journey.endDate ? formatDate(journey.endDate) : 0}`}</WeightText>
		</CardWrapper>
	);
};

export default JourneyCard;
