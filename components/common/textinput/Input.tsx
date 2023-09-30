import React from 'react';
import { TextInput } from 'react-native';
import { StyledError, StyledLabel, StyledWrapper } from './Input.style';
import { Text } from '@/components/Themed';

export interface InputProps {
  value: string | number | null;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  secureTextEntry?: boolean;
  onChange?: any;
  onFocus?: any;
  onBlur?: any;
  ref?: any;
}

const Input = ({
  value,
  placeholder,
  onChangeText,
  error,
  errorMessage,
  label,
  secureTextEntry,
  onChange,
  onFocus,
  onBlur,
  ref,
}: InputProps) => {
  return (
    <>
      <StyledWrapper>
        <TextInput
          secureTextEntry={secureTextEntry}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        />
      </StyledWrapper>
      {error && <StyledError>{errorMessage}</StyledError>}
    </>
  );
};

export default Input;
