import React from 'react';
import { ImageContainer, ImageMain } from './HeroImage.style';
import { Text } from '@/components/Themed';

const HeroImage = ({ sourceUrl }) => {
	return (
		<ImageContainer>
			<ImageMain source={sourceUrl} />
		</ImageContainer>
	);
};

export default HeroImage;
