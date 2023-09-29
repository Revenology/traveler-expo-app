import {
	BodyWrapper,
	FooterWrapper,
	HeaderWrapper,
	PageWrapper,
} from '@/components/common/PageWrapper';
import { Title } from '@/components/common/Title';
import LetsNavigator from '@/components/common/navigator/LetsNavigator';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	JourneyWrapper,
	ScrollViewWrapper,
	SecondaryTitle,
} from '../activities/Activities.styled';
import JourneyCard from '@/components/common/journeyCard/JourneyCard';
import AddButton from '@/components/common/addButton/AddButton';
import {
	CollaborateWrapper,
	FriendsModal,
	SectionWrapper,
} from './Collaborate.styled';
import FriendCard from '@/components/common/friendCard/FriendCard';
import { getFriends } from '@/service/api';
import { updateFormData } from '@/app/.appSetup/formSlice';
import { Text } from '@/components/Themed';

const Collaborate = () => {
	const router = useRouter();
	const [friends, setFriends] = useState([]);
	const formData = useSelector(
		(state: { formData: { value: FormData } }) => state.formData.value
	);
	const [showFriends, setShowFriends] = useState(false);
	const dispatch = useDispatch();
	const [activeLeg, setActiveLeg] = useState(Object.keys(formData)[0]);
	const addFriendToTrip = (user) => {
		dispatch(
			updateFormData({
				...formData,
				[activeLeg]: {
					...formData[activeLeg],
					['friends']: formData[activeLeg]['friends']
						? [...formData[activeLeg]['friends'], user]
						: [user],
				},
			})
		);
	};

	useEffect(() => {
		(async () => {
			const friendsList = await getFriends(10);
			console.log(friendsList);
			setFriends(friendsList);
		})();
	}, []);
	return (
		<PageWrapper>
			<HeaderWrapper>
				<Title>Who should go?</Title>
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
					{showFriends && (
						<>
							<SecondaryTitle>Invite Travelers</SecondaryTitle>
							<FriendsModal>
								<CollaborateWrapper>
									<FriendsModal>
										{friends.map((item) => {
											return (
												<FriendCard
													key={item[0]}
													image={item.picture.thumbnail}
													firstName={item.name.first}
													lastName={item.name.last}
													location={item.location.country}
													onPress={() => addFriendToTrip(item)}
												/>
											);
										})}
									</FriendsModal>
								</CollaborateWrapper>
							</FriendsModal>
						</>
					)}
					{!showFriends && formData[activeLeg]['friends'] && (
						<>
							<SecondaryTitle>
								Travelers invited to {formData[activeLeg].city}
							</SecondaryTitle>
							<FriendsModal>
								<CollaborateWrapper>
									<FriendsModal>
										{formData[activeLeg]['friends'].map((item) => {
											return (
												<FriendCard
													key={item[0]}
													image={item.picture.thumbnail}
													firstName={item.name.first}
													lastName={item.name.last}
													location={item.location.country}
													onPress={() => addFriendToTrip(item)}
												/>
											);
										})}
									</FriendsModal>
								</CollaborateWrapper>
							</FriendsModal>
						</>
					)}
					{<AddButton onPress={() => setShowFriends(!showFriends)} />}
				</SectionWrapper>
			</BodyWrapper>
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
