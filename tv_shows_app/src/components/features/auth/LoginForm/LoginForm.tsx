'use client';
import { AuthRedirect } from '@/components/shared/auth/AuthRedirect';
import { PasswordInput } from '@/components/shared/auth/PasswordInput';
import { SuccessWindow } from '@/components/shared/auth/SuccessWindow';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import theme from '@/styles/theme/theme';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  Spinner,
  Text,
  typography,
} from '@chakra-ui/react';
import { log } from 'console';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ILoginForm>();
  const { trigger } = useSWRMutation(swrKeys.login, mutator<ILoginForm>, {
    onSuccess: () => {
      router.push('/shows');
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
        backgroundColor="darkPurple"
        height="100vh"
      >
        <Flex
          width="500px"
          height="500px"
          backgroundColor="purple2"
          direction="column"
          alignItems="center"
          as="form"
          gap="30px"
          py="10"
          borderRadius="10"
          onSubmit={handleSubmit(onLogin)}
          boxShadow="customShadow"
        >
          <Heading
            textStyle="headline"
            size="md"
            marginBottom="8"
            color="white"
          >
            TV shows APP
          </Heading>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" width="24px" />}
              fontSize="md"
              ml="56px"
            />
            <FormControl textColor="white">
              <Input
                isDisabled={isSubmitting}
                {...register('email')}
                placeholder="Email"
                type="email"
                color="white"
                _placeholder={{ color: 'white' }}
                size="md"
                data-testid="email"
              />
            </FormControl>
          </InputGroup>
          <PasswordInput
            disable={isSubmitting}
            thatPart={register('password')}
            placeholder="Password"
            testId="password"
          />
          <Button
            isLoading={isSubmitting}
            loadingText="Logging in"
            type="submit"
            textStyle="button"
            variant="default"
          >
            LOG IN
          </Button>
          <Flex flexDirection="row" color="white" gap="1" fontSize="xs">
            <Text textStyle="smallCaption"> Don't have an account? </Text>
            <Text as={NextLink} href="/register" textStyle="smallCaptionBold">
              Register
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
