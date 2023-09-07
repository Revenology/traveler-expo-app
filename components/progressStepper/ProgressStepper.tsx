import React from 'react';
import { PageWrapper } from '../common/PageWrapper';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Text, View } from '../Themed';

const ProgressStepper = () => {
	return (
		<>
			<ProgressSteps style={{ height: 10 }}>
				<ProgressStep label="First Step" removeBtnRow={true}></ProgressStep>
				<ProgressStep label="Second Step">
					<View style={{ alignItems: 'center' }}>
						<Text>This is the content within step 2!</Text>
					</View>
				</ProgressStep>
				<ProgressStep label="Third Step"></ProgressStep>
			</ProgressSteps>
		</>
	);
};

export default ProgressStepper;
