'use client';
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  Hide,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Show,
  Text,
} from '@chakra-ui/react';
import { forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IPasswordInput extends InputProps {
  placeholder: string;
  testId: string;
}

export const PasswordInput = forwardRef(
  ({ placeholder, testId, ...rest }: IPasswordInput, ref) => {
    const [hidden, setHidden] = useState(true);
    return (
      <>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="white" width="24px" />}
            ml={{ base: 0, lg: '56px' }}
          />
          <FormControl textColor="white">
            <Input
              ref={ref}
              {...rest}
              required
              placeholder={placeholder}
              type={hidden ? 'password' : 'text'}
              _placeholder={{ color: 'white' }}
              size={{ base: 'sm', lg: 'md' }}
              mx={{ base: 'auto', lg: '56px' }}
              data-testid={testId}
            />
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
