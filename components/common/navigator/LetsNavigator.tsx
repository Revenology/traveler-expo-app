import React from 'react';
import { NavigatorWrapper } from './LetsNavigator.styled';
import Button from '../button/Button';

interface ForwardProps {
  color?: string;
  border?: string;
  variant?: string;
}

const LetsNavigator = ({
  back,
  forward,
  backText,
  forwardText,
  forwardProps,
}: any) => {
  return (
    <NavigatorWrapper>
      <Button
        onPress={() => back()}
        title={backText}
        variant={'white'}
        width={'49%'}
        color={'#1A1D21'}
        border={'1px solid #1A1D21'}
      />
      <Button
        onPress={() => forward()}
        title={forwardText}
        variant={forwardProps?.variant ?? '#1A1D21'}
        color={forwardProps?.color ?? 'white'}
        border={forwardProps?.border ?? 'none'}
        width={'49%'}
      />
    </NavigatorWrapper>
  );
};

export default LetsNavigator;
