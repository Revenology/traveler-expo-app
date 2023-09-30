import React from 'react';
import { StyledAddButton, StyledText } from './AddButton.styled';
import { Text } from '@/components/Themed';

const AddButton = ({ onPress }: any) => {
  return (
    <StyledAddButton onPress={() => onPress()}>
      <StyledText>+</StyledText>
    </StyledAddButton>
  );
};

export default AddButton;
