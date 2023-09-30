import React from 'react';
import { CardWrapper, DetailWrapper, Pfp } from './FriendCard.styled';
import { Text } from '@/components/Themed';
import { Image } from 'react-native';
import HeroImage from '../heroImage/HeroImage';

interface FriendsProps {
  firstName: string;
  lastName: string;
  location: string;
  image: string;
  onPress: any;
}

const FriendCard = ({
  firstName,
  lastName,
  location,
  image,
  onPress,
}: FriendsProps) => {
  console.log(image);
  return (
    <CardWrapper onPress={() => onPress()}>
      <Pfp source={{ uri: image }} />
      <DetailWrapper>
        <Text>{`${firstName} ${lastName}`}</Text>
        <Text>{location}</Text>
      </DetailWrapper>
    </CardWrapper>
  );
};

export default FriendCard;
