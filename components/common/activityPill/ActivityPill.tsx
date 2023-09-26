import React from 'react';
import { ColorText, PillContainer } from './ActivityPill.styled';
import { Circle } from './ActivityPill.styled';

const ActivityPill = ({
	title,
	color,
	circleColor,
}: {
	title: string;
	color: string;
	circleColor: string;
}) => {
	return (
		<PillContainer $color={color}>
			<Circle $color={circleColor} />
			<ColorText>{title}</ColorText>
		</PillContainer>
	);
};

export default ActivityPill;
