import { Text } from '@/components/Themed';
import { PageWrapper } from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import { useRouter } from 'expo-router';
import React from 'react';

const Activities = () => {
	const router = useRouter();
	return (
		<PageWrapper>
			<Text>I am activities</Text>
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
		</PageWrapper>
	);
};

export default Activities;
