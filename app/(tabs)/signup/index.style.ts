import { Text, View } from '@/components/Themed';
import { styled } from 'styled-components/native';

export const StyledWrapper = styled(View)`
    height: 100%;
    flex: 1;
    align-items: center;
    justify-content: space-;
`;

export const StyledComponentWrapper = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
`;

export const Title = styled(Text)`
    font-size: 20;
    font-weight: bold;
`;

export const StyledLine = styled(View)`
    margin-top: 50%;
    color: black;
    height: 1px;
    width: 80px;
`;
export const StyledImage = styled(View)`
    align-items: center;
    justify-content: center;
    width: 50;
    height: 50;
    resizemode: stretch;
`;

export const InputWrapper = styled(View)`
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #d3d3d3;
    width: 50%;
    height: 30px;
`;
