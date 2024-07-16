'use client';
import { EmailIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IPasswordInput {
  thatPart: any;
  disable: any;
  placeholder: string;
  icon: any;
  testId: string;
}

export const PasswordInput = (params: IPasswordInput) => {
  const [hidden, setHidden] = useState(true);
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={params.icon}
        fontSize="md"
      />
      <FormControl textColor="white">
        <Input
          isDisabled={params.disable}
          paddingLeft="35px"
          {...params.thatPart}
          required
          placeholder={params.placeholder}
          type={hidden ? 'password' : 'text'}
          color="white"
          _placeholder={{ color: 'white' }}
          borderRadius="20px"
          size="md"
          data-testid={params.testId}
        />
      </FormControl>
      <InputRightElement fontSize="md">
        <IconButton
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
  );
};
