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
  InputRightElement,
  Show,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface IPasswordInput {
  thatPart: any;
  disable: any;
  placeholder: string;
  testId: string;
}

export const PasswordInput = (params: IPasswordInput) => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <Show above="1024px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="white" width="24px" />}
            ml="56px"
          />
          <FormControl textColor="white">
            <Input
              isDisabled={params.disable}
              {...params.thatPart}
              required
              placeholder={params.placeholder}
              type={hidden ? 'password' : 'text'}
              _placeholder={{ color: 'white' }}
              size="md"
              data-testid={params.testId}
            />
          </FormControl>
          <InputRightElement fontSize="md">
            <IconButton
              marginRight="120px"
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
      </Show>
      <Hide above="1024px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="white" width="24px" />}
          />
          <FormControl textColor="white">
            <Input
              mx="0"
              isDisabled={params.disable}
              {...params.thatPart}
              required
              placeholder={params.placeholder}
              type={hidden ? 'password' : 'text'}
              _placeholder={{ color: 'white' }}
              size="sm"
              data-testid={params.testId}
            />
          </FormControl>
          <InputRightElement fontSize="md">
            <IconButton
              marginRight="0"
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
      </Hide>
    </>
  );
};
