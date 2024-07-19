'use client';
import { AuthRedirect } from '@/components/shared/auth/AuthRedirect';
import { PasswordInput } from '@/components/shared/auth/PasswordInput';
import { SuccessWindow } from '@/components/shared/auth/SuccessWindow';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { log } from 'console';
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
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ILoginForm>();
  const { trigger } = useSWRMutation(swrKeys.login, mutator<ILoginForm>, {
    onSuccess: () => {
      setLoggedIn(true);
    },
  });
  const onLogin = async (data: ILoginForm) => {
    await trigger(data);
  };

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="4"
        backgroundColor="primary"
        height="100vh"
      >
        {loggedIn ? (
          <SuccessWindow link="/shows" message="Logged in!" />
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
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
                fontSize="md"
              />
              <FormControl textColor="white">
                <Input
                  isDisabled={isSubmitting}
                  {...register('email')}
                  paddingLeft="35px"
                  placeholder="Email"
                  type="email"
                  color="white"
                  _placeholder={{ color: 'white' }}
                  borderRadius="20px"
                  size="md"
                  data-testid="email"
                />
              </FormControl>
            </InputGroup>
            <PasswordInput
              disable={isSubmitting}
              thatPart={register('password')}
              placeholder="Password"
              icon={<LockIcon color="gray.300" />}
              testId="password"
            />
            <Button
              isLoading={isSubmitting}
              loadingText="Logging in"
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
    </>
  );
};
