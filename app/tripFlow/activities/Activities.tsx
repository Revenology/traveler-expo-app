import {
	HeaderWrapper,
	PageWrapper,
	BodyWrapper,
	FooterWrapper,
} from '@/components/common/PageWrapper';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	ActivityListModal,
	JourneyWrapper,
	PillWrapper,
	ScrollViewWrapper,
	SecondaryTitle,
	SectionScroll,
	SectionWrapper,
	TitleWrapper,
} from './Activities.styled';
import JourneyCard from '@/components/common/journeyCard/JourneyCard';
import { FormData } from '@/types/formData';
import { Title } from '@/components/common/Title';
import ActivityPill from '@/components/common/activityPill/ActivityPill';
import AddButton from '@/components/common/addButton/AddButton';
import ActivityList from './ActivityList';
import { updateFormData } from '@/app/.appSetup/formSlice';
import LetsNavigator from '@/components/common/navigator/LetsNavigator';
import { generateRandomColorsWithContrast } from '@/utils/util';
import { ScrollView } from 'react-native';

const Activities = () => {
	const router = useRouter();
	const formData = useSelector(
		(state: { formData: { value: FormData } }) => state.formData.value
	);
	const [activeLeg, setActiveLeg] = useState(Object.keys(formData)[0]);
	const dispatch = useDispatch();
	const [showPills, setShowPills] = useState(true);
	const [listType, setListType] = useState('activities');

	const handlePress = (pillType: string) => {
		setListType(pillType);
		setShowPills(!showPills);
	};

	const addTypesToList = (category: string, value: string) => {
		dispatch(
			updateFormData({
				...formData,
				[activeLeg]: {
					...formData[activeLeg],
					[category]: formData[activeLeg][category]
						? [...formData[activeLeg][category], value]
						: [value],
				},
			})
		);
		console.log(formData);
	};

	return (
		<PageWrapper>
			<HeaderWrapper>
				<Title>Select location</Title>
			</HeaderWrapper>
			<BodyWrapper>
				<ScrollViewWrapper>
					<JourneyWrapper horizontal={true}>
						{Object.entries(formData).map((item) => {
							const [key, value] = item;
							return (
								<JourneyCard
									key={`${value.city}-${value.startDate}`}
									journey={value}
									isActive={activeLeg == key}
									onPress={() => setActiveLeg(key)}
								/>
							);
						})}
					</JourneyWrapper>
				</ScrollViewWrapper>
				<SectionWrapper>
					<SectionScroll>
						{showPills && (
							<>
								<TitleWrapper>
									<SecondaryTitle>Activities</SecondaryTitle>
									<PillWrapper>
										{formData[activeLeg].activities?.map((item) => {
											const [colorA, colorB, text] =
												generateRandomColorsWithContrast();
											return (
												<ActivityPill
													key={item}
													title={item}
													color={colorA}
													circleColor={colorB}
													textColor={text}
												/>
											);
										})}
										<AddButton onPress={() => handlePress('activities')} />
									</PillWrapper>
								</TitleWrapper>
								<TitleWrapper>
									<SecondaryTitle>Cuisine</SecondaryTitle>
									<PillWrapper>
										{formData[activeLeg].cuisine?.map((item) => {
											const [colorA, colorB, text] =
												generateRandomColorsWithContrast();
											return (
												<ActivityPill
													key={item}
													title={item}
													color={colorA}
													circleColor={colorB}
													textColor={text}
												/>
											);
										})}
										<AddButton onPress={() => handlePress('cuisine')} />
									</PillWrapper>
								</TitleWrapper>
								<TitleWrapper>
									<SecondaryTitle>Accommodation</SecondaryTitle>
									<PillWrapper>
										{formData[activeLeg].accommodation?.map((item) => {
											const [colorA, colorB, text] =
												generateRandomColorsWithContrast();
											return (
												<ActivityPill
													key={item}
													title={item}
													color={colorA}
													circleColor={colorB}
													textColor={text}
												/>
											);
										})}
										<AddButton onPress={() => handlePress('accommodation')} />
									</PillWrapper>
								</TitleWrapper>
							</>
						)}
						{!showPills && (
							<ActivityListModal>
								<SecondaryTitle>Add {listType}</SecondaryTitle>
								<ActivityList
									listType={listType}
									onPress={addTypesToList}
									items={formData[activeLeg]}
								/>
								<AddButton onPress={() => setShowPills(!showPills)} />
							</ActivityListModal>
						)}
					</SectionScroll>
				</SectionWrapper>
			</BodyWrapper>
			<FooterWrapper>
				<LetsNavigator
					forward={() => {
						router.push('/tripFlow/collaborate/Collaborate');
						console.log('Pressed');
					}}
					backText={'Back'}
					forwardText={'Next'}
					back={() => {
						router.back();
					}}
				/>
			</FooterWrapper>
		</PageWrapper>
	);
};

export default Activities;
