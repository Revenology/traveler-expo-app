import { Text, View } from '@/components/Themed';
import { styled } from 'styled-components/native';

export const StyledWrapper = styled(View)`
    height: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StyledComponentWrapper = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
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
    alignitems: center;
    justifycontent: center;
    width: 50;
    height: 50;
    resizemode: stretch;
`;
