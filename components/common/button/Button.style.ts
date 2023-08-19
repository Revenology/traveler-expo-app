import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export interface StyledTOProps {
    variant?: 'primary' | 'secondary';
}

export const StyledTouchableOpacity = styled(TouchableOpacity)<StyledTOProps>`
    border-radius: 20px;
    background-color: ${(props) =>
        props.variant == 'secondary' ? '#afd2e9' : '#B2E8AE'};
    padding: 10px;
    width: 50%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;
