'use client';
import { CustomInput } from '@/components/shared/auth/CustomInput';
import { mutator } from '@/fetchers/mutator';
import { EmailIcon, LockIcon, RepeatIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { useState } from 'react';
import { SuccessWindow } from '@/components/shared/auth/SuccessWindow';

interface IRegisterForm {
  email: string;
  password: string;
  password_confirmation: string;
}

export const RegisterForm = () => {
  const [registred, setRegistred] = useState(false);
  const { register, handleSubmit } = useForm<IRegisterForm>();
  const [errorMesssage, setErrorMessage] = useState('');
  const { trigger } = useSWRMutation(
    'https://tv-shows.infinum.academy/users',
    mutator<IRegisterForm>,
    {
      onSuccess: () => {
        setRegistred(true);
      },
    }
  );
  const onRegister = async (data: IRegisterForm) => {
    if (data.password.length < 8) {
      setErrorMessage('Password must be at least 8 characters');
      return;
    }
    if (data.password != data.password_confirmation) {
      setErrorMessage('Password mismatch');
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
      {registred ? (
        <SuccessWindow link="/login" />
      ) : (
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
          {errorMesssage && (
            <Text color="white" fontSize="small">
              {errorMesssage}
            </Text>
          )}
          <Button
            type="submit"
            marginTop="8"
            backgroundColor="orange.100"
            _hover={{ bg: 'green.200' }}
            borderRadius="20px"
          >
            Register
          </Button>
          <Flex flexDirection="row" color="white" gap="1" fontSize="xs">
            <Text> Already have an account? </Text>
            <Text as={NextLink} href="/login" textDecoration="underline">
              Log in
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
  //
};
