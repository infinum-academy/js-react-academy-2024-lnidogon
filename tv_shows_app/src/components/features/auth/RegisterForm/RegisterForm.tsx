'use client';
import { CustomInput } from '@/components/shared/auth/CustomInput';
import { mutator } from '@/fetchers/mutators';
import { EmailIcon, LockIcon, RepeatIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';

interface IRegisterForm {
  email: string;
  password: string;
  password_confirmation: string;
  testParam: string;
}

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<IRegisterForm>();
  const { trigger } = useSWRMutation(
    'https://tv-shows.infinum.academy/users',
    mutator<IRegisterForm>
  );
  const onRegister = async (data: IRegisterForm) => {
    if (data.password != data.password_confirmation) {
      alert('Krivi password');
      return;
    }
    console.log(data);
    await trigger(data);
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="4"
      backgroundColor="pink.900"
      height="100vh"
    >
      <Flex
        backgroundColor="pink.800"
        direction="column"
        alignItems="center"
        as="form"
        gap="4"
        padding="10"
        borderRadius="10"
        onSubmit={handleSubmit(onRegister)}
      >
        <Heading color="white" size="md" marginBottom="8">
          TV shows APP
        </Heading>
        <CustomInput
          thatPart={register('email')}
          placeholder="Email"
          type="email"
          icon={<EmailIcon color="gray.300" />}
        />
        <CustomInput
          thatPart={register('password')}
          placeholder="Password"
          type="password"
          icon={<LockIcon color="gray.300" />}
        />
        <CustomInput
          thatPart={register('password_confirmation')}
          placeholder="Confirm password"
          type="password"
          icon={<RepeatIcon color="gray.300" />}
        />
        <Button
          type="submit"
          marginTop="8"
          backgroundColor="orange.100"
          _hover={{ bg: 'green.200' }}
          borderRadius="20px"
        >
          Register
        </Button>
      </Flex>
    </Flex>
  );
  //
};
