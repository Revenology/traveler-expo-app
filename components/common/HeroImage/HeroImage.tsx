import React from 'react';
import { ImageContainer, ImageMain } from './HeroImage.style';

const HeroImage = ({ source }) => {
	return (
		<ImageContainer>
			<ImageMain source={source} />
		</ImageContainer>
	);
};

export default HeroImage;
