'use client';
import { CustomInput } from '@/components/shared/auth/CustomInput';
import { SuccessWindow } from '@/components/shared/auth/SuccessWindow';
import { mutator } from '@/fetchers/mutator';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { register, handleSubmit } = useForm<ILoginForm>();
  const { trigger } = useSWRMutation(
    'https://tv-shows.infinum.academy/users/sign_in',
    mutator<ILoginForm>
  );
  const onLogin = async (data: ILoginForm) => {
    const response = await trigger(data);
    console.log(response);
    console.log(response.data.user.id);
    localStorage.setItem('tv-shows-uid', response.data.user.id);
    localStorage.setItem('tv-shows-header', response.headers);
    setLoggedIn(true);
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
      {loggedIn ? (
        <SuccessWindow link="/shows" />
      ) : (
        <Flex
          backgroundColor="pink.800"
          direction="column"
          alignItems="center"
          as="form"
          gap="4"
          padding="10"
          borderRadius="10"
          onSubmit={handleSubmit(onLogin)}
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
          <Button
            type="submit"
            marginTop="8"
            backgroundColor="orange.100"
            _hover={{ bg: 'green.200' }}
            borderRadius="20px"
          >
            Log in
          </Button>
          <Flex flexDirection="row" color="white" gap="1" fontSize="xs">
            <Text> Don't have an account? </Text>
            <Text as={NextLink} href="/register" textDecoration="underline">
              Register
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
