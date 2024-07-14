'use client';
import { EmailIcon } from '@chakra-ui/icons';
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';

interface ICustomInput {
  thatPart: any;
  disable: any;
  placeholder: string;
  icon: any;
  type: string;
  testId: string;
}

export const CustomInput = (params: ICustomInput) => {
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
          type={params.type}
          color="white"
          _placeholder={{ color: 'white' }}
          borderRadius="20px"
          size="md"
          data-testid={params.testId}
        />
      </FormControl>
    </InputGroup>
  );
};
