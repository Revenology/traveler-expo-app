import { Text } from '@/components/Themed';
import { PageWrapper } from '@/components/common/PageWrapper';
import Button from '@/components/common/button/Button';
import { useRouter } from 'expo-router';
import React from 'react';

const Collaborate = () => {
	const router = useRouter();
	return (
		<PageWrapper>
			<Text>I am collaborate</Text>
			<Button
				variant="primary"
				onPress={() => {
					console.log('Pressed');
				}}
				title="Generate"
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

export default Collaborate;
