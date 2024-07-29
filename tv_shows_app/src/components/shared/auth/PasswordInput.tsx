'use client';
import { LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';
import { forwardRef, useState } from 'react';

interface IPasswordInput extends InputProps {
  error: string | undefined;
  placeholder: string;
  testId: string;
}

export const PasswordInput = forwardRef(
  ({ placeholder, testId, error, ...rest }: IPasswordInput, ref) => {
    const [hidden, setHidden] = useState(true);
    return (
      <>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="white" width="24px" />}
            ml={{ base: 0, lg: '56px' }}
          />
          <FormControl textColor="white" isInvalid={error != ''}>
            <Input
              ref={ref}
              {...rest}
              placeholder={placeholder}
              type={hidden ? 'password' : 'text'}
              _placeholder={{ color: 'white' }}
              size={{ base: 'sm', lg: 'md' }}
              mx={{ base: 'auto', lg: '56px' }}
              data-testid={testId}
            />
            <FormErrorMessage mx={{ base: 'auto', lg: '80px' }}>
              {error}
            </FormErrorMessage>
          </FormControl>
          <InputRightElement fontSize="md">
            <IconButton
              marginRight={{ base: 0, lg: '120px' }}
              color="white"
              aria-label="Search database"
              icon={hidden ? <ViewIcon /> : <ViewOffIcon />}
              onClick={() => {
                setHidden(!hidden);
              }}
              backgroundColor="transparent"
              _hover={{ backgroundColor: 'transparent' }}
            />
          </InputRightElement>
        </InputGroup>
      </>
    );
  }
);
