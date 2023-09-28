import React from 'react';
import { ColorText, PillContainer } from './ActivityPill.styled';
import { Circle } from './ActivityPill.styled';

const ActivityPill = ({
	title,
	color,
	circleColor,
	textColor,
}: {
	title: string;
	color: string;
	circleColor: string;
	textColor?: string;
}) => {
	return (
		<PillContainer $color={color}>
			<Circle $color={circleColor} />
			<ColorText $textColor={textColor}>{title}</ColorText>
		</PillContainer>
	);
};

export default ActivityPill;
