import React from 'react';
import {
	BackButton,
	BackText,
	ForwardButton,
	ForwardText,
	NavigatorWrapper,
} from './LetsNavigator.styled';

const LetsNavigator = ({ back, forward, backText, forwardText }: any) => {
	return (
		<NavigatorWrapper>
			<BackButton onPress={() => back()}>
				<BackText>{backText}</BackText>
			</BackButton>
			<ForwardButton onPress={() => forward()}>
				<ForwardText>{forwardText}</ForwardText>
			</ForwardButton>
		</NavigatorWrapper>
	);
};

export default LetsNavigator;
