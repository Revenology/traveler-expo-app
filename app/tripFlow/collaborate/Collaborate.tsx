import { Text } from '@/components/Themed';
import {
	BodyWrapper,
	FooterWrapper,
	HeaderWrapper,
	PageWrapper,
} from '@/components/common/PageWrapper';
import { Title } from '@/components/common/Title';
import Button from '@/components/common/button/Button';
import LetsNavigator from '@/components/common/navigator/LetsNavigator';
import { useRouter } from 'expo-router';
import React from 'react';

const Collaborate = () => {
	const router = useRouter();
	return (
		<PageWrapper>
			<HeaderWrapper>
				<Title>Who should go?</Title>
			</HeaderWrapper>
			<BodyWrapper></BodyWrapper>
			<FooterWrapper>
				<LetsNavigator
					back={() => router.back()}
					backText="Back"
					forward={() => console.log('Generate')}
					forwardText={'Generate'}
					forwardProps={{ variant: '#EF8E3C' }}
				/>
			</FooterWrapper>
		</PageWrapper>
	);
};

export default Collaborate;
